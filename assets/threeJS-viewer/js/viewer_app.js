import {
    buildMaps, buildPolygonEdgeLines, buildPolygonGeometry, buildShellEdgeLines, buildShellGeometry,
    buildSolidEdgeLines, buildSolidGeometry,
    createSolidMesh, createVertexMarkers,
    getFeatures, getOpenShells, getTopologyFeatureCounts, needsTransparency,
} from './topology_geometry.js';
import { PROJECTION_ORTHOGRAPHIC, PROJECTION_PERSPECTIVE } from './viewer_scene.js';

const MESH_OPACITY_TRANSPARENT = 0.85;
const MESH_OPACITY_SURFACE = 0.55;
const MESH_OPACITY_PARCEL = 0.35;

/**
 * Parcel states drawn by default.
 *
 * Parcels outside this set are still built and still appear in the object panel, but start
 * hidden: the parcels of a dataset commonly share a footprint, so drawing every historical
 * tenure at once stacks coincident translucent polygons at the datum.
 */
const PRIMARY_PARCEL_STATES = new Set([
    'wa-parcel-state:created',
]);

// ─── UI messages ──────────────────────────────────────────────────────────────

const LOADING_MESSAGE = 'Loading model...<br>Use the mouse to rotate and zoom';
const NO_OBJECTS_MESSAGE = '<span style="color: #ff6666;">No parcels, surfaces, or solids found in this file.</span>';
const LOAD_ERROR_MESSAGE = '<span style="color: #ff6666;">Error loading model:</span><br>';

const PROJECTION_BUTTON_LABELS = {
    [PROJECTION_PERSPECTIVE]: 'View: Perspective',
    [PROJECTION_ORTHOGRAPHIC]: 'View: Orthographic',
};

// ─── Viewer app factory ───────────────────────────────────────────────────────

/**
 * Initialises the viewer application: builds the UI, wires control events,
 * loads the initial model, and starts the animation loop.
 *
 * @param {Object} sceneObjects - The result of initScene() containing a scene, gridHelper, and animate.
 * @param {Object} viewerControls - The result of initControls() containing renderable state and camera helpers.
 * @param {string} [initialModel] - Path to the model JSON to load on startup (used when modelSelectId is absent).
 * @param {string} [modelSelectId] - ID of the <select> element for model switching. When provided, the
 *                                   select's current value is used as the initial model and change events
 *                                   trigger reloads.
 */
export function initViewerApp({ sceneObjects, viewerControls, initialModel, modelSelectId }) {
    const { scene, gridHelper, animate, getProjection, setProjection } = sceneObjects;
    const {
        solidMeshes, solidEdges, solidVertices,
        clearScene, fitCameraToModel, resetCamera,
    } = viewerControls;
    const renderableControls = [];

    // ─── UI elements ──────────────────────────────────────────────────────────

    /**
     * A collection of UI elements used for interaction in the application.
     *
     * @property {HTMLElement} info - The HTML element providing information to the user.
     * @property {HTMLElement} modelLabel - The label element displaying the current model name.
     * @property {HTMLElement} objectsControls - The container element for object controls.
     * @property {HTMLElement} toggleVertices - The checkbox for toggling vertex visibility.
     * @property {HTMLElement} toggleWireframe - The checkbox for toggling wireframe mode.
     * @property {HTMLElement} toggleEdges - The checkbox for toggling-edge visibility.
     * @property {HTMLElement} resetCamera - The button to reset the camera view.
     * @property {HTMLElement} toggleGrid - The button for toggling the grid.
     * @property {?HTMLElement} toggleProjection - The button for switching between perspective and orthographic projection.
     */
    const ui = {
        info: document.getElementById('info'),
        modelLabel: document.getElementById('modelLabel'),
        objectsControls: document.getElementById('objectsControls') || document.getElementById('solidsControls'),
        toggleVertices: document.getElementById('toggleVertices'),
        toggleWireframe: document.getElementById('toggleWireframe'),
        toggleEdges: document.getElementById('toggleEdges'),
        resetCamera: document.getElementById('resetCamera'),
        toggleGrid: document.getElementById('toggleGrid'),
        toggleProjection: document.getElementById('toggleProjection'),
        modelSelect: modelSelectId ? document.getElementById(modelSelectId) : null,
    };

    const model = { name: 'Loading...' };
    ui.modelLabel.textContent = `Model:${model.name}`;

    // ─── Model loading ─────────────────────────────────────────────────────────

    /**
     * Loads a 3D model from a specified file, parses its content, and processes the model data.
     *
     * @param {string} filename - The path to the file containing the 3D model data.
     * @return {Promise<void>} A promise that resolves once the model is successfully loaded and processed.
     */
    async function _loadModel(filename) {
        try {
            _showLoadingState();

            const response = await fetch(filename);
            const data = await response.json();

            _updateModelMetadata(data, filename);

            const topologyMaps = buildMaps(data);
            const renderableObjects = _selectRenderableObjects(data, topologyMaps);
            const parcels = renderableObjects.parcels;
            const surfaces = renderableObjects.surfaces;
            const solids = renderableObjects.solids;

            if (parcels.length === 0 && surfaces.length === 0 && solids.length === 0) {
                ui.info.innerHTML = NO_OBJECTS_MESSAGE;
                return;
            }

            const featureCounts = getTopologyFeatureCounts(data);
            const opacity = needsTransparency(data) ? MESH_OPACITY_TRANSPARENT : 1.0;
            const hasParcels = parcels.length > 0;

            // Built once and shared: every parcel is drawn at the datum, and the map is a full
            // pass over the point map.
            const datumPointMap = _createDatumPointMap(topologyMaps.pointMap);

            // Colour is chosen by index, so the three lists are numbered consecutively rather
            // than each starting at zero — otherwise the first parcel, surface, and solid all
            // share a colour.
            parcels.forEach((parcel, index) => {
                _addParcelToScene(parcel, index, topologyMaps, datumPointMap);
            });
            surfaces.forEach((surface, index) => {
                _addSurfaceToScene(surface, parcels.length + index, topologyMaps, false);
            });
            solids.forEach((solid, index) => {
                _addSolidToScene(
                    solid, parcels.length + surfaces.length + index,
                    topologyMaps, opacity, !hasParcels
                );
            });

            const modelBounds = fitCameraToModel();

            ui.info.innerHTML = _buildModelInfoHtml(
                filename,
                featureCounts,
                parcels.length,
                surfaces.length,
                solids.length,
                modelBounds.size
            );
        } catch (error) {
            console.error('Error loading model:', error);
            ui.info.innerHTML = LOAD_ERROR_MESSAGE + error.message;
        }
    }

    function _showLoadingState() {
        ui.info.innerHTML = LOADING_MESSAGE;
        clearScene();
        renderableControls.length = 0;
        ui.objectsControls.innerHTML = '<strong>Objects:</strong>';
        ui.toggleVertices.checked = false;
    }

    function _updateModelMetadata(data, filename) {
        model.name = data.surveyTitle || data.name || filename;
        ui.modelLabel.textContent = `Model:${model.name}`;
    }

    /**
     * Adds a parcel polygon to the scene by generating its geometry, mesh, edges, and vertex markers,
     * and then integrating them into the scene.
     *
     * Current tenure is drawn as a filled face with a solid boundary and starts visible.
     * Superseded tenure is drawn as a dashed boundary with no fill and starts hidden — its
     * visibility control is registered either way, so it can be brought back at any time.
     *
     * @param {Object} parcel - The parcel object to be added to the scene.
     * @param {number} index - The index of the parcel, used for colour selection and labelling.
     * @param {Object} topologyMaps - The topological maps required for constructing the solid geometry.
     * @param {Object} datumPointMap - The point map flattened to the datum, from `_createDatumPointMap()`.
     * @return {void}
     */
    function _addParcelToScene(parcel, index, topologyMaps, datumPointMap) {
        const {edgeMap} = topologyMaps;
        const isCurrentTenure = _isCurrentTenureParcel(parcel);

        const {geometry, faceCount} = buildPolygonGeometry(parcel, edgeMap, datumPointMap);
        const mesh = createSolidMesh(parcel, index, geometry, MESH_OPACITY_PARCEL);
        const edges = buildPolygonEdgeLines(parcel, edgeMap, datumPointMap, !isCurrentTenure);
        const verticesGroup = createVertexMarkers(geometry);
        const parcelName = parcel.properties?.appellation?.label
            || parcel.properties?.name
            || parcel.id;

        _registerRenderable({
            mesh, edges, verticesGroup,
            name: parcelName, kindLabel: 'Parcel', faceCount,
            renderOrder: 1, depthWrite: false,
            initialVisible: isCurrentTenure,
            filled: isCurrentTenure,
            stateLabel: _formatParcelState(parcel),
        });
    }

    /**
     * Renders a parcel's state token as display text: `wa-parcel-state:former-tenure`
     * becomes `Former Tenure`.
     *
     * The token is de-slugified rather than looked up in a table, so a state outside the
     * two this dataset family currently uses still labels itself readably.
     *
     * @param {Object} parcel - A parcel feature.
     * @return {string} The display text, or '' when the parcel declares no state.
     */
    function _formatParcelState(parcel) {
        const parcelState = parcel.properties?.parcelState;

        if (!parcelState) {
            return '';
        }

        return parcelState
            .split(':').pop()
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    /**
     * Reports whether a parcel represents current tenure, and so should be drawn as a filled
     * face with a solid boundary and shown on load. Superseded tenure is drawn as a dashed
     * boundary with no fill.
     *
     * A parcel that declares no state counts as current: the state vocabulary is optional, and
     * a dataset that omits it should not load as an empty scene.
     *
     * @param {Object} parcel - A parcel feature.
     * @return {boolean}
     */
    function _isCurrentTenureParcel(parcel) {
        const parcelState = parcel.properties?.parcelState;

        return !parcelState || PRIMARY_PARCEL_STATES.has(parcelState);
    }

    /**
     * Adds a shell surface to the scene by generating its geometry, mesh, edges, and vertex markers,
     * and then integrating them into the scene.
     *
     * @param {Object} shell - The shell object to be added to the scene.
     * @param {number} index - The index of the shell, used for colour selection and labelling.
     * @param {Object} topologyMaps - The topological maps required for constructing the surface geometry.
     * @param initialVisible
     * @return {void}
     */
    function _addSurfaceToScene(shell, index, topologyMaps, initialVisible = false) {
        const {geometry, faceCount} = buildShellGeometry(shell, topologyMaps);
        const mesh = createSolidMesh(shell, index, geometry, MESH_OPACITY_SURFACE);
        const edges = buildShellEdgeLines(shell, topologyMaps);
        const verticesGroup = createVertexMarkers(geometry);
        const surfaceName = shell.properties?.description
            || shell.properties?.name
            || shell.id;

        _registerRenderable({
            mesh, edges, verticesGroup,
            name: surfaceName, kindLabel: 'Surface', faceCount,
            renderOrder: 1, depthWrite: false, initialVisible,
        });
    }

    /**
     * Adds a solid object to the scene by generating its geometry, mesh, edges, and vertex markers,
     * and then integrating them into the scene.
     *
     * @param {Object} solid - The solid object to be added to the scene.
     * @param {number} index - The index of the solid, used for colour selection and labelling.
     * @param {Object} topologyMaps - The topological maps required for constructing the solid geometry.
     * @param opacity - Opacity value for faces, either 0.85 or 1.0.
     * @param initialVisible
     * @return {void}
     */
    function _addSolidToScene(solid, index, topologyMaps, opacity, initialVisible = false) {
        const {shellMap} = topologyMaps;
        const solidName = solid.properties?.name || solid.id;
        let geometry = null;
        let faceCount = 0;

        try {
            ({geometry, faceCount} = buildSolidGeometry(solid, topologyMaps));
        } catch (error) {
            console.warn(`Solid geometry failed for ${solidName}; falling back to shell geometry.`, error);
        }

        if (!geometry || faceCount === 0) {
            const fallbackShellRef = solid.topology.directed_references?.[0]?.ref;
            const fallbackShell = fallbackShellRef ? shellMap[fallbackShellRef] : null;

            if (fallbackShell) {
                ({geometry, faceCount} = buildShellGeometry(fallbackShell, topologyMaps));
            }
        }

        const mesh = createSolidMesh(solid, index, geometry, opacity);
        const edges = buildSolidEdgeLines(solid, topologyMaps);
        const verticesGroup = createVertexMarkers(geometry);

        _registerRenderable({
            mesh, edges, verticesGroup,
            name: solidName, kindLabel: 'Solid', faceCount,
            renderOrder: 2, initialVisible,
        });
    }

    /**
     * Adds a renderable object's mesh, edges, and vertex markers to the scene, registers them in the
     * shared renderable arrays, applies the current wireframe/edge/vertex toggle state, and appends a
     * visibility control. Shared by the parcel, surface, and solid builders.
     *
     * @param {Object}            renderable                     - The built object parts and display metadata.
     * @param {THREE.Mesh}        renderable.mesh                - The object mesh.
     * @param {THREE.LineSegments} renderable.edges              - The edge lines.
     * @param {THREE.Group}       renderable.verticesGroup       - The vertex marker group.
     * @param {string}            renderable.name                - Label text for the visibility control.
     * @param {string}            renderable.kindLabel           - Object type label ('Parcel', 'Surface', 'Solid').
     * @param {number}            renderable.faceCount           - Face count shown in the label.
     * @param {number}            renderable.renderOrder         - three.js render order for the mesh.
     * @param {boolean}           [renderable.depthWrite=true]   - Whether the mesh writes to the depth buffer.
     * @param {boolean}           [renderable.initialVisible=true] - Whether the object starts visible.
     * @param {boolean}           [renderable.filled=true]       - Whether to draw the face; an unfilled
     *                                                             object is represented by its boundary alone.
     * @param {string}            [renderable.stateLabel='']     - Status badge text; omitted when empty.
     * @return {void}
     */
    function _registerRenderable({ mesh, edges, verticesGroup, name, kindLabel, faceCount, renderOrder, depthWrite = true, initialVisible = true, filled = true, stateLabel = '' }) {
        mesh.material.depthWrite = depthWrite;
        mesh.renderOrder = renderOrder;
        // Read back by _syncRenderableVisibility, so that toggling an unfilled object on brings
        // back its boundary without ever revealing its face.
        mesh.userData.filled = filled;
        scene.add(mesh);
        scene.add(edges);
        scene.add(verticesGroup);

        solidMeshes.push(mesh);
        solidEdges.push(edges);
        solidVertices.push(verticesGroup);

        mesh.material.wireframe = ui.toggleWireframe.checked;
        edges.visible = ui.toggleEdges.checked;
        verticesGroup.visible = false;

        _addObjectVisibilityControl(mesh, edges, verticesGroup, name, kindLabel, faceCount, initialVisible, stateLabel);
    }

    /**
     * Creates and appends a per-object visibility checkbox to the object controls panel.
     *
     * @param {THREE.Mesh} mesh - The solid mesh.
     * @param {THREE.LineSegments} edges - The edge lines for the solid.
     * @param {THREE.Group} verticesGroup - The vertex marker group for the object.
     * @param {string} solidName - Label text for the checkbox.
     * @param {string} kindLabel - Object type label shown in the control text.
     * @param {number} faceCount - Face count shown in the label.
     * @param {boolean} initialVisible - Whether the object starts visible.
     * @param {string} [stateLabel=''] - Status badge text shown after the name; omitted when empty.
     * @return {void}
     */
    function _addObjectVisibilityControl(mesh, edges, verticesGroup, solidName, kindLabel, faceCount, initialVisible = true, stateLabel = '') {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.checked = initialVisible;
        const control = {checkbox, mesh, edges, verticesGroup};
        renderableControls.push(control);
        checkbox.addEventListener('change', () => {
            _syncRenderableVisibility(control);
        });

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${kindLabel}: ${solidName}`));

        if (stateLabel) {
            const badge = document.createElement('span');

            badge.className = 'object-state';
            badge.textContent = stateLabel;
            label.appendChild(document.createTextNode(' '));
            label.appendChild(badge);
        }

        label.appendChild(document.createTextNode(` (${faceCount} faces)`));
        ui.objectsControls.appendChild(label);
        _syncRenderableVisibility(control);
    }

    /**
     * Generates an HTML string containing detailed information about a 3D model.
     *
     * @param {string} filename - The name of the file representing the 3D model.
     * @param {Object} featureCounts - Point, edge, face, and shell counts.
     * @param {number} parcelCount - The total number of parcels in the model.
     * @param {number} surfaceCount - The number of open surfaces (shells not bounding a solid) rendered.
     * @param {number} solidCount - The total number of solids in the model.
     * @param {Object} boundsSize - Bounding box dimensions {x, y, z}.
     * @return {string} An HTML string describing the 3D model details.
     */
    function _buildModelInfoHtml(filename, featureCounts, parcelCount, surfaceCount, solidCount, boundsSize) {
        return `<b>${filename}</b><br>` +
            `Points: ${featureCounts.points.toLocaleString()}<br>` +
            `Edges: ${featureCounts.edges.toLocaleString()}<br>` +
            `Faces: ${featureCounts.faces.toLocaleString()}<br>` +
            `Shells: ${featureCounts.shells.toLocaleString()}<br>` +
            `Parcels: ${parcelCount.toLocaleString()}<br>` +
            `Open surfaces: ${surfaceCount.toLocaleString()}<br>` +
            `Solids: ${solidCount.toLocaleString()}<br>` +
            `Bounds: ${boundsSize.x.toFixed(3)} × ${boundsSize.y.toFixed(3)} × ${boundsSize.z.toFixed(3)}<br><br>` +
            `<small>Mouse: rotate/zoom<br>Axes: X(red) Y(green) Z(blue)</small>`;
    }

    /**
     * Chooses which parcels, surfaces, and solids to render.
     *
     * Only *open* shells are offered as surfaces: a shell that bounds a solid — directly
     * or through a nested shell — is already drawn by that solid, so listing it again
     * duplicates geometry and clutters the object panel.
     *
     * Every parcel matching `_isPrimaryParcel` is returned. Where those parcels carry explicit
     * surface and solid references, the surface and solid lists are narrowed to the union of
     * those references; a dataset whose parcels carry no references keeps the full lists.
     *
     * @param {Object} data - The topology dataset.
     * @param {Object} topologyMaps - The topology maps returned by `buildMaps()`.
     * @return {{parcels: Array<Object>, surfaces: Array<Object>, solids: Array<Object>}} The objects to render.
     */
    function _selectRenderableObjects(data, topologyMaps) {
        const allParcels = getFeatures(data.parcels);
        const allSurfaces = getOpenShells(data, topologyMaps);
        const allSolids = getFeatures(data.solids);

        const primaryParcels = allParcels.filter(_isPrimaryParcel);

        if (primaryParcels.length === 0) {
            return {
                parcels: allParcels,
                surfaces: allSurfaces,
                solids: allSolids,
            };
        }

        const surfaceIds = _collectParcelRefs(primaryParcels, parcel => parcel.properties?.surface?.ref);
        const solidIds = _collectParcelRefs(primaryParcels, parcel => parcel.properties?.solidRef);

        return {
            parcels: primaryParcels,
            surfaces: _narrowByIds(allSurfaces, surfaceIds),
            solids: _narrowByIds(allSolids, solidIds),
        };
    }

    /**
     * Reports whether a parcel is a parcel of this survey rather than incidental context —
     * it either carries a parcel state, or declares 3D geometry of its own.
     *
     * A parcel selected here may still start hidden; see `_isParcelVisibleByDefault()`.
     *
     * @param {Object} parcel - A parcel feature.
     * @return {boolean}
     */
    function _isPrimaryParcel(parcel) {
        const properties = parcel.properties || {};

        return Boolean(properties.parcelState)
            || properties.representationStatus === 'representation-status:d3d'
            || Boolean(properties.solidRef)
            || Boolean(properties.surface?.ref);
    }

    /**
     * Collects the distinct, defined references read from a set of parcels.
     *
     * @param {Array<Object>} parcels - The parcels to read.
     * @param {function(Object): (string|undefined)} readRef - Reads one reference from a parcel.
     * @return {Set<string>} The distinct references found.
     */
    function _collectParcelRefs(parcels, readRef) {
        return new Set(parcels.map(readRef).filter(Boolean));
    }

    /**
     * Narrows features to those whose ID appears in `ids`, or returns them all when no parcel
     * expressed a preference.
     *
     * @param {Array<Object>} features - The candidate features.
     * @param {Set<string>} ids - The IDs to keep; an empty set keeps everything.
     * @return {Array<Object>} The retained features.
     */
    function _narrowByIds(features, ids) {
        return ids.size === 0 ? features : features.filter(feature => ids.has(feature.id));
    }

    /**
     * Copies a point map with every elevation replaced by the datum, so parcels draw as a flat
     * footprint at z=0 regardless of the elevations their points carry.
     *
     * @param {Object} pointMap - A map of point IDs to [x, y, z] coordinates.
     * @return {Object} A map of point IDs to [x, y, 0] coordinates.
     */
    function _createDatumPointMap(pointMap) {
        const datumPointMap = {};

        Object.entries(pointMap).forEach(([pointId, coordinates]) => {
            datumPointMap[pointId] = [coordinates[0], coordinates[1], 0];
        });

        return datumPointMap;
    }

    // ─── Event wiring ──────────────────────────────────────────────────────────

    if (modelSelectId) {
        _loadModel(ui.modelSelect.value);
        ui.modelSelect.addEventListener('change', e => _loadModel(e.target.value));
    } else {
        _loadModel(initialModel);
    }

    ui.toggleWireframe.addEventListener('change', e => {
        solidMeshes.forEach(m => { m.material.wireframe = e.target.checked; });
    });
    ui.toggleEdges.addEventListener('change', e => {
        renderableControls.forEach(control => _syncRenderableVisibility(control));
    });
    ui.toggleVertices.addEventListener('change', e => {
        renderableControls.forEach(control => _syncRenderableVisibility(control));
    });
    ui.resetCamera.addEventListener('click', resetCamera);
    ui.toggleGrid.addEventListener('click', () => {
        gridHelper.visible = !gridHelper.visible;
    });

    // Guarded: entry points that omit the button from their controls panel simply keep the default
    // perspective projection.
    if (ui.toggleProjection) {
        _updateProjectionLabel();
        ui.toggleProjection.addEventListener('click', () => {
            setProjection(getProjection() === PROJECTION_PERSPECTIVE
                ? PROJECTION_ORTHOGRAPHIC
                : PROJECTION_PERSPECTIVE);
            _updateProjectionLabel();
        });
    }

    animate();

    /**
     * Sets the projection button text to the projection currently in use.
     *
     * @return {void}
     */
    function _updateProjectionLabel() {
        ui.toggleProjection.textContent = PROJECTION_BUTTON_LABELS[getProjection()];
    }

    /**
     * Applies an object's own checkbox together with the global edge and vertex toggles.
     *
     * An unfilled object keeps its face hidden throughout, and keeps its boundary regardless of
     * the global edge toggle: the boundary is the whole of its representation, so dropping it
     * would leave a ticked object with nothing on screen.
     *
     * @param {{checkbox: HTMLInputElement, mesh: THREE.Mesh, edges: THREE.LineSegments, verticesGroup: THREE.Group}} control
     * @return {void}
     */
    function _syncRenderableVisibility(control) {
        const {checkbox, mesh, edges, verticesGroup} = control;
        const enabled = checkbox.checked;
        const filled = mesh.userData.filled !== false;

        mesh.visible = enabled && filled;
        edges.visible = enabled && (ui.toggleEdges.checked || !filled);
        verticesGroup.visible = enabled && ui.toggleVertices.checked;
    }
}
