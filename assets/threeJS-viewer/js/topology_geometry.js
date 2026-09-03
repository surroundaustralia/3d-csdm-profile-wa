import * as THREE from 'three';
import earcut from 'earcut';

// ─── Geometry and topology constants ──────────────────────────────────────────

const COORDINATE_DIMENSIONS = 3;
const NORMAL_X_AXIS_THRESHOLD = 0.9;
const POSITION_ATTRIBUTE = 'position';
const NORMAL_ATTRIBUTE = 'normal';
const REVERSED_ORIENTATION = '-';
const FORWARD_ORIENTATION = '+';
const FACE_TOPOLOGY_TYPE = 'Face';
const SHELL_TOPOLOGY_TYPE = 'Shell';
const MAX_SHELL_NESTING_DEPTH = 16;

// ─── Rendering style constants ────────────────────────────────────────────────

const EDGE_LINE_COLOR = 0xffffff;
const EDGE_LINE_WIDTH = 1;
// Dash lengths are taken from the drawn extent so the pattern reads the same on a survey
// spanning tens of metres and on a unit test cube.
const EDGE_DASH_SIZE_SCALE = 0.03;
const EDGE_GAP_SIZE_SCALE = 0.02;
const EDGE_DASH_FALLBACK_SIZE = 1;
const VERTEX_MARKER_SEGMENTS = 12;
const VERTEX_MARKER_COLOR = 0xffff00;
const VERTEX_KEY_PRECISION = 6;
const VERTEX_RADIUS_SCALE = 0.05;
const MESH_SHININESS = 30;
const MESH_OPACITY_SOLID = 1.0;
const POLYGON_OFFSET_FACTOR = 1;
const POLYGON_OFFSET_UNITS = 1;

const SOLID_COLORS = [
    0x3388ff, 0xff8833, 0x33ff88, 0xff3388, 0x8833ff,
    0x33ffff, 0xffff33, 0xff33ff, 0x88ff33, 0x3388aa
];

// ─── Topology data utilities ──────────────────────────────────────────────────

/**
 * Builds and returns a collection of maps representing different geometric and topological features.
 *
 * @param {Object} data - The input data containing arrays of geometric and topological features.
 * @param {Array} data.points - The array of point features with geometry or place data.
 * @param {Array} data.edges - The array of edge features with topology references.
 * @param {Array} data.rings - The array of ring features.
 * @param {Array} data.faces - The array of face features.
 * @param {Array} data.shells - The array of shell features.
 * @return {Object} An object containing the generated maps:
 *                  - `pointMap`: A map of points indexed by ID.
 *                  - `edgeMap`: A map of edges indexed by ID.
 *                  - `ringMap`: A map of rings indexed by ID.
 *                  - `faceMap`: A map of faces indexed by ID.
 *                  - `shellMap`: A map of shells indexed by ID.
 */
export function buildMaps(data) {
    const pointMap = _mapFeaturesById(data.points, pointFeature =>
        (pointFeature.place || pointFeature.geometry).coordinates.slice()
    );

    _centerCoordinatesAroundOrigin(Object.values(pointMap));

    const edgeMap = _mapFeaturesById(_getEdgeFeatureCollections(data.edges), edgeFeature =>
        edgeFeature.topology.references
    );
    const ringMap = _mapFeaturesById(data.rings);
    const faceMap = _mapFeaturesById(data.faces);
    const shellMap = _mapFeaturesById(data.shells);

    return {pointMap, edgeMap, ringMap, faceMap, shellMap};
}

/**
 * Maps features from an array of feature collections by their unique IDs.
 *
 * @param {Array} featureCollections - An array of feature collections, where each collection contains a `features` array.
 * @param {Function} [getValue=feature => feature] - A function to extract or transform the value to be mapped by feature ID. Defaults to returning the feature itself.
 * @return {Object} An object where each key is a feature ID and the value is determined by the `getValue` function.
 */
function _mapFeaturesById(featureCollections = [], getValue = feature => feature) {
    const featureMap = {};

    featureCollections.forEach(featureCollection => {
        featureCollection.features.forEach(feature => {
            featureMap[feature.id] = getValue(feature);
        });
    });

    return featureMap;
}

/**
 * Adjusts a set of coordinates so that their x/y centroid is moved to the origin.
 * Z is left untouched so absolute heights stay aligned to datum and the grid.
 *
 * @param {number[][]} coordinates - A 2D array of coordinates, where each inner array represents a coordinate in n-dimensional space.
 * @return {void} Does not return a value. The input array is modified in place.
 */
function _centerCoordinatesAroundOrigin(coordinates) {
    if (coordinates.length === 0) {
        return;
    }

    const centroid = _calculateCentroid(coordinates);

    coordinates.forEach(coordinate => {
        coordinate[0] = coordinate[0] - centroid[0];
        coordinate[1] = coordinate[1] - centroid[1];
    });
}

/**
 * Calculates the centroid of a set of coordinates in an n-dimensional space.
 *
 * @param {number[][]} coordinates An array of points where each point is an array of numbers representing its position in n-dimensional space.
 * @return {number[]} An array representing the coordinates of the centroid in n-dimensional space.
 */
function _calculateCentroid(coordinates) {
    const totals = coordinates.reduce(
        (sumByDimension, coordinate) => {
            coordinate.forEach((value, dimensionIndex) => {
                sumByDimension[dimensionIndex] += value;
            });

            return sumByDimension;
        },
        Array(COORDINATE_DIMENSIONS).fill(0)
    );

    return totals.map(total => total / coordinates.length);
}

/**
 * Extracts and combines all features from an array of feature collections.
 *
 * @param {Array<Object>} featureCollections - An array of feature collection objects.
 * Each object is expected to have a `features` property containing an array of features.
 * @return {Array<Object>} An array of features extracted from the provided feature collections.
 */
export function getFeatures(featureCollections = []) {
    return featureCollections.flatMap(featureCollection => featureCollection.features);
}

/**
 * Computes the counts of different topology features from the given data object.
 *
 * @param {Object} data - The input data object containing topology features.
 * @param {Array} data.points - An array representing the points in the topology.
 * @param {Array} data.edges - An array representing the edges in the topology.
 * @param {Array} data.faces - An array representing the faces in the topology.
 * @param {Array} data.shells - An array representing the shells in the topology.
 * @return {Object} An object containing the counts of various topology features.
 */
export function getTopologyFeatureCounts(data) {
    return {
        points: _countFeatures(data.points),
        edges: _countFilteredFeatures(data.edges, featureCollection =>
            featureCollection.featureType !== 'SubtendedAngle'
        ),
        faces: _countFeatures(data.faces),
        shells: _countFeatures(data.shells),
    };
}

function _countFeatures(featureCollections = []) {
    return featureCollections.reduce(
        (total, featureCollection) => total + featureCollection.features.length,
        0
    );
}

function _countFilteredFeatures(featureCollections = [], predicate = () => true) {
    return featureCollections.reduce(
        (total, featureCollection) => predicate(featureCollection)
            ? total + featureCollection.features.length
            : total,
        0
    );
}

function _getEdgeFeatureCollections(edgeCollections = []) {
    return edgeCollections.filter(featureCollection => featureCollection.featureType !== 'SubtendedAngle');
}

/**
 * Returns true when the dataset contains any geometry that requires transparency
 * to remain visible: a face with an inner ring (hole) or a solid with more than
 * one shell (void/protrusion topology).
 *
 * @param {Object} data - The topology dataset (faces, solid arrays).
 * @return {boolean}
 */
export function needsTransparency(data) {
    const faceHasHole = getFeatures(data.faces || [])
        .some(face => face.topology.directed_references.length > 1);

    const solidHasVoid = getFeatures(data.solids || [])
        .some(solid => solid.topology.directed_references.length > 1);

    return faceHasHole || solidHasVoid;
}

// ─── Coordinate geometry ──────────────────────────────────────────────────────

/**
 * Converts a ring feature into an ordered array of [x,y,z] coordinates by resolving references
 * based on the provided edge and point maps.
 *
 * For orientation "+": add the edge's start point.
 * For orientation "-": add the edge's end point (traversed in reverse).
 *
 * @param {Object} ringFeature - The ring feature containing topology and references.
 * @param {Object} edgeMap - A map where keys are edge references and values are arrays of IDs representing edge endpoints.
 * @param {Object} pointMap - A map where keys are point IDs and values are coordinate arrays or objects.
 * @return {Array} An array of coordinates resolved from the ring feature's directed references.
 */
function _ringToCoords(ringFeature, edgeMap, pointMap) {
    return ringFeature.topology.directed_references.map(member => {
        const [startId, endId] = edgeMap[member.ref];
        const pointId = member.orientation === FORWARD_ORIENTATION ? startId : endId;
        return pointMap[pointId];
    });
}

/**
 * Creates an orthonormal basis for a plane defined by its normal vector.
 * The method computes two perpendicular vectors (axisU and axisV) that
 * lie on the plane whose normal is specified, forming a local coordinate
 * system for the plane.
 *
 * @param {number[]} normal - The normal vector of the plane as an array of three numbers [x, y, z].
 * @return {Object} An object containing two perpendicular normalised vectors:
 *                  `axisU` - A normalised vector perpendicular to the plane normal.
 *                  `axisV` - A normalised vector perpendicular to both the plane normal and `axisU`.
 */
function _createPlaneBasis(normal) {
    const planeNormal = new THREE.Vector3(...normal).normalize();

    // Choose a stable reference axis that is not almost parallel to the plane normal.
    const referenceAxis = Math.abs(planeNormal.x) < NORMAL_X_AXIS_THRESHOLD
        ? new THREE.Vector3(1, 0, 0)
        : new THREE.Vector3(0, 1, 0);

    const axisU = new THREE.Vector3().crossVectors(referenceAxis, planeNormal).normalize();
    const axisV = new THREE.Vector3().crossVectors(planeNormal, axisU);

    return {axisU, axisV};
}

/**
 * Triangulates a 3D planar polygon (convex or concave) with optional holes using earcut.
 *
 * All rings (outer boundary and holes) are projected onto the same 2D plane using the
 * outer ring's first vertex as the shared origin, then passed to earcut with hole start
 * indices so that the hole regions are excluded from the triangulation.
 *
 * @param {Array<Array<number>>} outerCoords - Ordered 3D vertices of the outer boundary.
 * @param {Array<Array<Array<number>>>} holeCoordsList - Zero or more arrays of 3D vertices,
 *   each describing one hole boundary.
 * @param {Array<number>} normal - A 3D normal vector [nx, ny, nz] for the polygon's plane.
 * @return {Object} An object containing:
 *                  - `positions`: Flat array of 3D vertex positions for the output triangles.
 *                  - `normals`: Flat array of normals, one per triangle vertex.
 */
function _triangulatePolygon(outerCoords, holeCoordsList, normal) {
    const positions = [];
    const normals = [];
    if (outerCoords.length < 3) return { positions, normals };

    const {axisU, axisV} = _createPlaneBasis(normal);
    const origin = new THREE.Vector3(...outerCoords[0]);

    const projectPoint = coord => {
        const rel = new THREE.Vector3(...coord).sub(origin);
        return [rel.dot(axisU), rel.dot(axisV)];
    };

    // Build flat 2D vertex array and record where each hole starts.
    const allCoords3D = [...outerCoords];
    const flat2D = outerCoords.flatMap(projectPoint);
    const holeIndices = [];

    for (const holeCoords of holeCoordsList) {
        if (holeCoords.length < 3) continue;
        holeIndices.push(allCoords3D.length);
        allCoords3D.push(...holeCoords);
        flat2D.push(...holeCoords.flatMap(projectPoint));
    }

    const indices = earcut(flat2D, holeIndices.length ? holeIndices : null);

    for (let i = 0; i < indices.length; i += 3) {
        positions.push(
            ...allCoords3D[indices[i]],
            ...allCoords3D[indices[i + 1]],
            ...allCoords3D[indices[i + 2]]
        );
        normals.push(...normal, ...normal, ...normal);
    }
    return {positions, normals};
}

// ─── Topology traversal ───────────────────────────────────────────────────────

/**
 * Classifies a directed reference as either a leaf face or a nested shell.
 *
 * Faces and shells share one ID space, so a reference carries no hint of its
 * target's kind. Faces are looked up first, and `topology.type` guards the case
 * where the same ID appears in both maps.
 *
 * @param {string} ref - The referenced feature ID.
 * @param {Object} faceMap - A map of face features indexed by ID.
 * @param {Object} shellMap - A map of shell features indexed by ID.
 * @return {?{kind: string, feature: Object}} The resolved kind and feature, or null when unresolvable.
 */
function _resolveBoundaryReference(ref, faceMap, shellMap) {
    const face = faceMap[ref];
    if (face && face.topology?.type !== SHELL_TOPOLOGY_TYPE) {
        return {kind: FACE_TOPOLOGY_TYPE, feature: face};
    }

    const shell = shellMap[ref];
    if (shell) {
        return {kind: SHELL_TOPOLOGY_TYPE, feature: shell};
    }

    return null;
}

/**
 * Flattens a solid or shell boundary into leaf face references, descending through
 * any nested shells.
 *
 * This supports both solid constructions: the original solid → shell → face chain,
 * and an offset-derived solid whose shell references other shells (for example the
 * upper and lower offset surfaces) alongside its own faces. A shell whose
 * references are all faces flattens to those faces at depth 0, so existing
 * datasets resolve exactly as before.
 *
 * Each leaf face reference is returned with its own orientation untouched. The
 * orientation on a *shell* reference is deliberately NOT propagated down to the
 * faces it contains: it marks the shell's role in its parent (a solid's interior
 * void shell is referenced with '-') rather than requesting a normal flip, and the
 * contained faces already carry correctly signed normals. Composing the two
 * inverts every void's normals and turns the enclosed volume from
 * `exterior - void` into `exterior + void`.
 *
 * @param {Object} container - A solid or shell feature holding `topology.directed_references`.
 * @param {Object} faceMap - A map of face features indexed by ID.
 * @param {Object} shellMap - A map of shell features indexed by ID.
 * @param {Object} [options] - Recursion state; callers do not normally supply it.
 * @param {Set<string>} [options.visitedShellIds] - Shell IDs already on the current path.
 * @param {number} [options.depth=0] - The current nesting depth.
 * @return {Array<{ref: string, orientation: string}>} Leaf face references in traversal order.
 */
function _flattenToFaceReferences(container, faceMap, shellMap, options = {}) {
    const {visitedShellIds = new Set(), depth = 0} = options;

    if (depth > MAX_SHELL_NESTING_DEPTH) {
        return [];
    }

    const directedReferences = container?.topology?.directed_references || [];

    return directedReferences.flatMap(reference => {
        const resolved = _resolveBoundaryReference(reference.ref, faceMap, shellMap);
        if (!resolved) return [];

        if (resolved.kind === FACE_TOPOLOGY_TYPE) {
            return [reference];
        }

        // The cycle guard is per-path, so a shell legitimately referenced from two
        // separate branches is still expanded in both.
        if (visitedShellIds.has(reference.ref)) {
            return [];
        }

        return _flattenToFaceReferences(resolved.feature, faceMap, shellMap, {
            visitedShellIds: new Set(visitedShellIds).add(reference.ref),
            depth: depth + 1,
        });
    });
}

/**
 * Collects the IDs of every shell that bounds a solid, descending through nested
 * shells so that a shell referenced only indirectly (as an offset-derived solid's
 * upper and lower surfaces are) is included too.
 *
 * @param {Array<Object>} solids - The solid features to walk.
 * @param {Object} faceMap - A map of face features indexed by ID.
 * @param {Object} shellMap - A map of shell features indexed by ID.
 * @return {Set<string>} The IDs of all shells reachable from a solid boundary.
 */
function _collectSolidShellIds(solids, faceMap, shellMap) {
    const solidShellIds = new Set();

    const visitContainer = (container, depth) => {
        if (depth > MAX_SHELL_NESTING_DEPTH) {
            return;
        }

        const directedReferences = container?.topology?.directed_references || [];

        directedReferences.forEach(reference => {
            const resolved = _resolveBoundaryReference(reference.ref, faceMap, shellMap);
            if (!resolved || resolved.kind !== SHELL_TOPOLOGY_TYPE) return;

            // Membership doubles as the cycle guard: a shell already recorded has
            // already had its own references expanded.
            if (solidShellIds.has(reference.ref)) return;

            solidShellIds.add(reference.ref);
            visitContainer(resolved.feature, depth + 1);
        });
    };

    solids.forEach(solid => visitContainer(solid, 0));

    return solidShellIds;
}

/**
 * Returns the open shells in a dataset: those that no solid uses as part of its
 * boundary, directly or through a nested shell.
 *
 * A solid already draws the faces of its own shells, so rendering those shells
 * separately duplicates geometry. Only open shells describe a surface that is not
 * otherwise visible.
 *
 * @param {Object} data - The topology dataset (shell and solid arrays).
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {Array<Object>} The shell features that are not part of any solid.
 */
export function getOpenShells(data, {faceMap, shellMap}) {
    const solidShellIds = _collectSolidShellIds(getFeatures(data.solids), faceMap, shellMap);

    return getFeatures(data.shells).filter(shell => !solidShellIds.has(shell.id));
}

// ─── Edge geometry ────────────────────────────────────────────────────────────

/**
 * Collects unique edge IDs from a solid or shell boundary, descending through any
 * nested shells.
 *
 * @param {Object} container - A solid or shell feature.
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {Set<string>} A set of unique edge IDs.
 */
function _collectUniqueEdgeIds(container, {faceMap, shellMap, ringMap}) {
    const edgeIds = new Set();

    _flattenToFaceReferences(container, faceMap, shellMap).forEach(faceRef => {
        const face = faceMap[faceRef.ref];
        if (!face) return;

        face.topology.directed_references.forEach(ringRef => {
            const ring = ringMap[ringRef.ref];
            if (!ring) return;

            ring.topology.directed_references.forEach(edgeRef => {
                edgeIds.add(edgeRef.ref);
            });
        });
    });

    return edgeIds;
}

/**
 * Builds a dashed line material whose dash lengths suit the extent of the given geometry.
 *
 * A degenerate geometry falls back to a fixed dash length: a zero-length dash and gap leave
 * the shader with nothing to repeat and the line disappears entirely.
 *
 * @param {THREE.BufferGeometry} geometry - The line geometry the material will be used with.
 * @return {THREE.LineDashedMaterial} The dashed material.
 */
function _createDashedEdgeMaterial(geometry) {
    geometry.computeBoundingSphere();

    const radius = geometry.boundingSphere?.radius || 0;
    const scale = radius > 0 ? radius : EDGE_DASH_FALLBACK_SIZE;

    return new THREE.LineDashedMaterial({
        color: EDGE_LINE_COLOR,
        linewidth: EDGE_LINE_WIDTH,
        dashSize: scale * EDGE_DASH_SIZE_SCALE,
        gapSize: scale * EDGE_GAP_SIZE_SCALE,
    });
}

/**
 * Builds a THREE.LineSegments object spanning the given edges.
 *
 * @param {Set<string>} edgeIds - The edge IDs to draw.
 * @param {Object} edgeMap - A map connecting edge IDs to point ID pairs.
 * @param {Object} pointMap - A map of coordinates indexed by point ID.
 * @param {boolean} [dashed=false] - Whether to draw the lines dashed rather than solid.
 * @return {THREE.LineSegments} The edge lines.
 */
function _buildEdgeLines(edgeIds, edgeMap, pointMap, dashed = false) {
    const positions = [];

    edgeIds.forEach(edgeId => {
        const edgePointIds = edgeMap[edgeId];
        if (!edgePointIds) return;

        const [startPointId, endPointId] = edgePointIds;
        const startPoint = pointMap[startPointId];
        const endPoint = pointMap[endPointId];

        if (!startPoint || !endPoint) return;

        positions.push(...startPoint, ...endPoint);
    });

    const geometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(new Float32Array(positions), COORDINATE_DIMENSIONS);
    geometry.setAttribute(POSITION_ATTRIBUTE, positionAttribute);

    const material = dashed
        ? _createDashedEdgeMaterial(geometry)
        : new THREE.LineBasicMaterial({
            color: EDGE_LINE_COLOR,
            linewidth: EDGE_LINE_WIDTH,
        });
    const edgeLines = new THREE.LineSegments(geometry, material);

    if (dashed) {
        // LineDashedMaterial reads the lineDistance attribute; without this the line draws solid.
        edgeLines.computeLineDistances();
    }

    return edgeLines;
}

/**
 * Constructs and returns a THREE.LineSegments object representing the solid's edge lines.
 *
 * @param {Object} solid - The solid feature containing the topology and references.
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {THREE.LineSegments} A THREE.LineSegments object representing the edges of the solid.
 */
export function buildSolidEdgeLines(solid, maps) {
    return _buildEdgeLines(_collectUniqueEdgeIds(solid, maps), maps.edgeMap, maps.pointMap);
}

/**
 * Constructs and returns a THREE.LineSegments object representing a shell's edge lines.
 *
 * @param {Object} shell - The shell feature containing the topology and references.
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {THREE.LineSegments} A THREE.LineSegments object representing the edges of the shell.
 */
export function buildShellEdgeLines(shell, maps) {
    return _buildEdgeLines(_collectUniqueEdgeIds(shell, maps), maps.edgeMap, maps.pointMap);
}

// ─── Solid geometry ───────────────────────────────────────────────────────────

/**
 * Computes the oriented normal of a face based on its reference orientation.
 *
 * @param {Object} face - The face object containing its properties including the normal vector.
 * @param {Object} faceRef - Reference object containing orientation information for the face.
 * @return {number[]} The oriented normal vector, possibly inverted depending on the face reference orientation.
 */
function _getOrientedNormal(face, faceRef) {
    const rawNormal = face.properties.normal;

    return faceRef.orientation === REVERSED_ORIENTATION
        ? [-rawNormal[0], -rawNormal[1], -rawNormal[2]]
        : rawNormal;
}

/**
 * Triangulates a given face based on its reference, topology, and geometric data.
 *
 * @param {Object} faceRef - The reference object for the face, containing the face ID and the
 *   face's own orientation.
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {Object|null} The positions and normals of the triangulated face, or null if triangulation is not possible.
 */
function _triangulateFaceReference(faceRef, {faceMap, ringMap, edgeMap, pointMap}) {
    const face = faceMap[faceRef.ref];
    if (!face) return null;

    const normal = _getOrientedNormal(face, faceRef);
    const ringRefs = face.topology.directed_references;

    const outerRing = ringMap[ringRefs[0]?.ref];
    if (!outerRing) return null;

    const outerCoords = _ringToCoords(outerRing, edgeMap, pointMap);
    if (outerCoords.length < 3) return null;

    // Collect inner rings (holes) — all directed_references after the first.
    const holeCoordsList = ringRefs.slice(1)
        .map(ringRef => ringMap[ringRef.ref])
        .filter(ring => ring != null)
        .map(ring => _ringToCoords(ring, edgeMap, pointMap))
        .filter(coords => coords.length >= 3);

    return _triangulatePolygon(outerCoords, holeCoordsList, normal);
}

/**
 * Creates a BufferGeometry instance with provided vertex positions and normals.
 *
 * @param {Array<number>} vertexPositions - An array of numbers representing the vertex positions.
 * @param {Array<number>} vertexNormals - An array of numbers representing the vertex normals.
 * @return {THREE.BufferGeometry} The constructed BufferGeometry object with attributes and computed bounding data.
 */
function _createBufferGeometry(vertexPositions, vertexNormals) {
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
        POSITION_ATTRIBUTE,
        new THREE.BufferAttribute(new Float32Array(vertexPositions), COORDINATE_DIMENSIONS)
    );
    geometry.setAttribute(
        NORMAL_ATTRIBUTE,
        new THREE.BufferAttribute(new Float32Array(vertexNormals), COORDINATE_DIMENSIONS)
    );

    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    return geometry;
}

/**
 * Triangulates a flat list of leaf face references into a single buffer geometry.
 *
 * @param {Array<{ref: string, orientation: string}>} faceReferences - The leaf face references to triangulate.
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {Object} Contains the generated geometry as a buffer and the count of faces processed.
 */
function _buildGeometryFromFaceReferences(faceReferences, maps) {
    const vertexPositions = [];
    const vertexNormals = [];
    let faceCount = 0;

    for (const faceRef of faceReferences) {
        const triangulatedFace = _triangulateFaceReference(faceRef, maps);
        if (!triangulatedFace) continue;

        vertexPositions.push(...triangulatedFace.positions);
        vertexNormals.push(...triangulatedFace.normals);
        faceCount++;
    }

    const geometry = _createBufferGeometry(vertexPositions, vertexNormals);

    return {geometry, faceCount};
}

/**
 * Builds a solid geometry representation by processing the topology and mapping data from the provided solid object.
 *
 * The solid's boundary is flattened to leaf faces first, so a shell that references
 * other shells (as an offset-derived solid does for its upper and lower surfaces)
 * contributes its nested faces as well as its own.
 *
 * @param {Object} solid - The solid object containing topology information for constructing the geometry.
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {Object} Contains the generated geometry as a buffer and the count of faces processed.
 */
export function buildSolidGeometry(solid, maps) {
    return _buildGeometryFromFaceReferences(
        _flattenToFaceReferences(solid, maps.faceMap, maps.shellMap),
        maps
    );
}

/**
 * Builds a shell geometry representation by processing the topology and mapping data
 * from the provided shell object.
 *
 * @param {Object} shell - The shell object containing topology information.
 * @param {Object} maps - The topology maps returned by `buildMaps()`.
 * @return {Object} Contains the generated geometry as a buffer and the count of faces processed.
 */
export function buildShellGeometry(shell, maps) {
    return _buildGeometryFromFaceReferences(
        _flattenToFaceReferences(shell, maps.faceMap, maps.shellMap),
        maps
    );
}

function _resolvePolygonCoords(edgeRefs, edgeMap, pointMap) {
    const adjacency = new Map();
    let startPointId = null;

    const addNeighbor = (pointId, neighborId) => {
        if (!adjacency.has(pointId)) {
            adjacency.set(pointId, new Set());
        }

        adjacency.get(pointId).add(neighborId);
    };

    edgeRefs.forEach(edgeRef => {
        const edgePointIds = edgeMap[edgeRef];
        if (!edgePointIds) return;

        const [startId, endId] = edgePointIds;
        if (!pointMap[startId] || !pointMap[endId]) return;

        if (startPointId == null) {
            startPointId = startId;
        }

        addNeighbor(startId, endId);
        addNeighbor(endId, startId);
    });

    if (startPointId == null) {
        return [];
    }

    const coords = [pointMap[startPointId]];
    const visitedPointIds = new Set([startPointId]);
    let previousPointId = null;
    let currentPointId = startPointId;

    for (let step = 0; step < adjacency.size + 1; step++) {
        const neighbors = Array.from(adjacency.get(currentPointId) || []);
        if (neighbors.length === 0) {
            break;
        }

        const nextPointId = neighbors.find(pointId => pointId !== previousPointId) || neighbors[0];
        if (nextPointId === startPointId && coords.length > 2) {
            break;
        }

        if (visitedPointIds.has(nextPointId) && nextPointId !== startPointId) {
            break;
        }

        coords.push(pointMap[nextPointId]);
        visitedPointIds.add(nextPointId);
        previousPointId = currentPointId;
        currentPointId = nextPointId;
    }

    if (coords.length > 1 && _areCoordsEqual(coords[0], coords[coords.length - 1])) {
        coords.pop();
    }

    return coords;
}

function _areCoordsEqual(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

function _calculatePolygonNormal(coords) {
    const normal = [0, 0, 0];

    for (let index = 0; index < coords.length; index++) {
        const current = coords[index];
        const next = coords[(index + 1) % coords.length];

        normal[0] += (current[1] - next[1]) * (current[2] + next[2]);
        normal[1] += (current[2] - next[2]) * (current[0] + next[0]);
        normal[2] += (current[0] - next[0]) * (current[1] + next[1]);
    }

    const vector = new THREE.Vector3(...normal);
    if (vector.lengthSq() === 0) {
        return [0, 0, 1];
    }

    return vector.normalize().toArray();
}

/**
 * Normalises a polygon's edge references to GeoJSON ring form.
 *
 * Accepts both the flat legacy shape (`["edge-1", "edge-2"]`, describing a single
 * outer boundary) and the GeoJSON Polygon shape (`[["edge-1", ...], ["hole-1", ...]]`,
 * an outer boundary followed by any holes). Nesting is detected from the first
 * entry, since the two shapes are otherwise indistinguishable.
 *
 * @param {Array} references - The raw `topology.references` value.
 * @return {Array<Array<string>>} One array of edge IDs per ring.
 */
function _normalizePolygonRings(references = []) {
    if (references.length === 0) {
        return [];
    }

    return Array.isArray(references[0]) ? references : [references];
}

/**
 * Builds a polygon geometry representation from ordered boundary-edge references.
 *
 * The first ring is the outer boundary; any further rings are treated as holes and
 * excluded from the triangulation.
 *
 * @param {Object} polygon - The polygon feature containing topology information.
 * @param {Object} edgeMap - A map connecting edge IDs to point IDs.
 * @param {Object} pointMap - A map containing point information indexed by point IDs.
 * @return {{geometry: THREE.BufferGeometry, faceCount: number}} The generated geometry and face count.
 */
export function buildPolygonGeometry(polygon, edgeMap, pointMap) {
    const ringCoords = _normalizePolygonRings(polygon.topology.references)
        .map(edgeRefs => _resolvePolygonCoords(edgeRefs, edgeMap, pointMap))
        .filter(coords => coords.length >= 3);

    if (ringCoords.length === 0) {
        return {geometry: _createBufferGeometry([], []), faceCount: 0};
    }

    const [outerCoords, ...holeCoordsList] = ringCoords;
    const normal = _calculatePolygonNormal(outerCoords);
    const {positions, normals} = _triangulatePolygon(outerCoords, holeCoordsList, normal);

    return {
        geometry: _createBufferGeometry(positions, normals),
        faceCount: positions.length > 0 ? 1 : 0,
    };
}

/**
 * Builds the boundary edge lines for a polygon across all of its rings.
 *
 * @param {Object} polygon - The polygon feature containing topology information.
 * @param {Object} edgeMap - A map connecting edge IDs to point ID pairs.
 * @param {Object} pointMap - A map containing point information indexed by point IDs.
 * @param {boolean} [dashed=false] - Whether to draw the boundary dashed rather than solid.
 * @return {THREE.LineSegments} A THREE.LineSegments object representing the polygon boundary.
 */
export function buildPolygonEdgeLines(polygon, edgeMap, pointMap, dashed = false) {
    const edgeIds = new Set(_normalizePolygonRings(polygon.topology.references).flat());

    return _buildEdgeLines(edgeIds, edgeMap, pointMap, dashed);
}

// ─── Solid mesh ───────────────────────────────────────────────────────────────

/**
 * Creates a solid mesh using the provided solid data, index, and geometry.
 *
 * @param {Object} solid - The solid object containing properties and identifiers.
 * @param {number} index - The index number used to determine the material's colour.
 * @param {THREE.Geometry | THREE.BufferGeometry} geometry - The geometry to be used for the mesh.
 * @param opacity - Geometry opacity
 * @return {THREE.Mesh} The created 3D mesh object with associated material and user data.
 */
export function createSolidMesh(solid, index, geometry, opacity = MESH_OPACITY_SOLID) {
    const material = new THREE.MeshPhongMaterial({
        color: SOLID_COLORS[index % SOLID_COLORS.length],
        side: THREE.DoubleSide,
        flatShading: false,
        shininess: MESH_SHININESS,
        transparent: opacity < 1.0,
        opacity,
        polygonOffset: true,
        polygonOffsetFactor: POLYGON_OFFSET_FACTOR,
        polygonOffsetUnits: POLYGON_OFFSET_UNITS,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData.solidName = solid.properties?.name || solid.id;

    return mesh;
}

// ─── Vertex markers ───────────────────────────────────────────────────────────

/**
 * Creates a group of vertex markers for the given geometry. Each marker represents a unique vertex
 * in the geometry using a spherical mesh at the vertex position.
 *
 * @param {THREE.BufferGeometry} geometry - The geometry from which to create vertex markers. The geometry must have a position attribute defining vertex positions.
 * @return {THREE.Group} A group containing the spherical vertex marker meshes. Each mesh corresponds to a unique vertex in the geometry.
 */
export function createVertexMarkers(geometry) {
    const positionAttribute = geometry.getAttribute(POSITION_ATTRIBUTE);
    if (!positionAttribute || positionAttribute.count === 0 || !geometry.boundingSphere) {
        return new THREE.Group();
    }

    const vertexRadius = geometry.boundingSphere.radius * VERTEX_RADIUS_SCALE;
    const markerGeometry = new THREE.SphereGeometry(
        vertexRadius,
        VERTEX_MARKER_SEGMENTS,
        VERTEX_MARKER_SEGMENTS
    );
    const markerMaterial = new THREE.MeshBasicMaterial({color: VERTEX_MARKER_COLOR});
    const vertexMarkers = new THREE.Group();
    const seenVertexKeys = new Set();

    for (let index = 0; index < positionAttribute.count; index++) {
        if (!_isUniqueVertex(positionAttribute, index, seenVertexKeys)) {
            continue;
        }

        vertexMarkers.add(_createVertexMarker(markerGeometry, markerMaterial, positionAttribute, index));
    }

    return vertexMarkers;
}

function _createVertexMarker(markerGeometry, markerMaterial, positionAttribute, index) {
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);

    marker.position.set(
        positionAttribute.getX(index),
        positionAttribute.getY(index),
        positionAttribute.getZ(index)
    );

    return marker;
}

function _isUniqueVertex(positionAttribute, index, seenVertexKeys) {
    const vertexKey = _getVertexKey(positionAttribute, index);

    if (seenVertexKeys.has(vertexKey)) {
        return false;
    }

    seenVertexKeys.add(vertexKey);
    return true;
}

function _getVertexKey(positionAttribute, index) {
    return [
        positionAttribute.getX(index).toFixed(VERTEX_KEY_PRECISION),
        positionAttribute.getY(index).toFixed(VERTEX_KEY_PRECISION),
        positionAttribute.getZ(index).toFixed(VERTEX_KEY_PRECISION),
    ].join(',');
}
