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

            parcels.forEach((parcel, index) => {
                _addParcelToScene(parcel, index, topologyMaps);
            });
            surfaces.forEach((surface, index) => {
                _addSurfaceToScene(surface, index, topologyMaps, false);
            });
            solids.forEach((solid, index) => {
                _addSolidToScene(solid, index, topologyMaps, opacity, !hasParcels);
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
     * @param {Object} parcel - The parcel object to be added to the scene.
     * @param {number} index - The index of the parcel, used for colour selection and labelling.
     * @param {Object} topologyMaps - The topological maps required for constructing the solid geometry.
     * @return {void}
     */
    function _addParcelToScene(parcel, index, topologyMaps) {
        const {pointMap, edgeMap} = topologyMaps;
        const datumPointMap = _createDatumPointMap(pointMap);

        const {geometry, faceCount} = buildPolygonGeometry(parcel, edgeMap, datumPointMap);
        const mesh = createSolidMesh(parcel, index, geometry, MESH_OPACITY_PARCEL);
        const edges = buildPolygonEdgeLines(parcel, edgeMap, datumPointMap);
        const verticesGroup = createVertexMarkers(geometry);
        const parcelName = parcel.properties?.appellation?.label
            || parcel.properties?.name
            || parcel.id;

        _registerRenderable({
            mesh, edges, verticesGroup,
            name: parcelName, kindLabel: 'Parcel', faceCount,
            renderOrder: 1, depthWrite: false,
        });
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
     * @return {void}
     */
    function _registerRenderable({ mesh, edges, verticesGroup, name, kindLabel, faceCount, renderOrder, depthWrite = true, initialVisible = true }) {
        mesh.material.depthWrite = depthWrite;
        mesh.renderOrder = renderOrder;
        scene.add(mesh);
        scene.add(edges);
        scene.add(verticesGroup);

        solidMeshes.push(mesh);
        solidEdges.push(edges);
        solidVertices.push(verticesGroup);

        mesh.material.wireframe = ui.toggleWireframe.checked;
        edges.visible = ui.toggleEdges.checked;
        verticesGroup.visible = false;

        _addObjectVisibilityControl(mesh, edges, verticesGroup, name, kindLabel, faceCount, initialVisible);
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
     * @return {void}
     */
    function _addObjectVisibilityControl(mesh, edges, verticesGroup, solidName, kindLabel, faceCount, initialVisible = true) {
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
        label.appendChild(document.createTextNode(` ${kindLabel}: ${solidName} (${faceCount} faces)`));
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
     * When the dataset names a primary parcel, its explicit surface and solid references
     * narrow the selection to that parcel's own geometry.
     *
     * @param {Object} data - The topology dataset.
     * @param {Object} topologyMaps - The topology maps returned by `buildMaps()`.
     * @return {{parcels: Array<Object>, surfaces: Array<Object>, solids: Array<Object>}} The objects to render.
     */
    function _selectRenderableObjects(data, topologyMaps) {
        const allParcels = getFeatures(data.parcels);
        const allSurfaces = getOpenShells(data, topologyMaps);
        const allSolids = getFeatures(data.solids);

        const primaryParcel = allParcels.find(feature =>
            feature.id === 'parcel-1'
            || feature.properties?.representationStatus === 'representation-status:d3d'
            || feature.properties?.solidRef
            || feature.properties?.surface?.ref
        );

        if (!primaryParcel) {
            return {
                parcels: allParcels,
                surfaces: allSurfaces,
                solids: allSolids,
            };
        }

        const surfaceId = primaryParcel.properties?.surface?.ref;
        const solidId = primaryParcel.properties?.solidRef;

        return {
            parcels: [primaryParcel],
            surfaces: surfaceId
                ? allSurfaces.filter(surface => surface.id === surfaceId)
                : allSurfaces,
            solids: solidId
                ? allSolids.filter(solid => solid.id === solidId)
                : allSolids,
        };
    }

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

    function _syncRenderableVisibility(control) {
        const {checkbox, mesh, edges, verticesGroup} = control;
        const enabled = checkbox.checked;

        mesh.visible = enabled;
        edges.visible = enabled && ui.toggleEdges.checked;
        verticesGroup.visible = enabled && ui.toggleVertices.checked;
    }
}
