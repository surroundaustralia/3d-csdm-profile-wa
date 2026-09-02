import * as THREE from 'three';

// ─── Camera fitting constants ─────────────────────────────────────────────────

const CAMERA_DISTANCE_SCALE = 2;
const CAMERA_OFFSET_SCALE = 0.7;
const CAMERA_NEAR_SCALE = 0.001;
const CAMERA_FAR_SCALE = 100;

// ─── Controls factory ─────────────────────────────────────────────────────────

/**
 * Initialises renderable-state arrays and camera-control helpers bound to the given scene objects.
 * Call once per viewer after initScene().
 *
 * solidMeshes, solidEdges, and solidVertices are stable array references for all renderables — they are cleared
 * in-place (array.length = 0) rather than reassigned, so destructured references remain valid.
 *
 * The camera is read through getCamera() on each use rather than captured, because setProjection()
 * swaps between the perspective and orthographic instances.
 *
 * initialCameraPosition / initialCameraTarget / initialCameraZoom are kept private; use resetCamera() instead.
 *
 * @param {{ scene: THREE.Scene, getCamera: () => THREE.Camera, controls: OrbitControls, syncProjection: () => void }} sceneObjects
 * @return {{ solidMeshes, solidEdges, solidVertices, clearScene, fitCameraToModel, resetCamera }}
 */
export function initControls({ scene, getCamera, controls, syncProjection }) {

    // ─── Solid state ──────────────────────────────────────────────────────────

    const solidMeshes = [];
    const solidEdges = [];
    const solidVertices = [];
    let initialCameraPosition = null;
    let initialCameraTarget = null;
    let initialCameraZoom = 1;

    // ─── Scene management ─────────────────────────────────────────────────────

    /**
     * Clears all elements related to the 3D scene, including meshes, edges, and vertices.
     * Frees up memory by disposing of geometry and materials associated with the elements.
     *
     * @return {void} This method does not return a value.
     */
    function clearScene() {
        solidMeshes.forEach(m => { scene.remove(m); m.geometry.dispose(); m.material.dispose(); });
        solidEdges.forEach(e => { scene.remove(e); e.geometry.dispose(); });
        solidVertices.forEach(g => { scene.remove(g); });
        solidMeshes.length = 0;
        solidEdges.length = 0;
        solidVertices.length = 0;
    }

    // ─── Camera control ───────────────────────────────────────────────────────

    /**
     * Adjusts the camera's position, zoom, near and far planes, and controls' target to fit all given solid meshes within the view.
     * This method calculates the bounding box of all solid meshes, determines the centre and size of the box, and updates the camera and controls accordingly.
     *
     * Works for either projection: the position and clipping planes are set the same way, then
     * syncProjection() resizes the orthographic frustum to the resulting distance when that camera is active.
     *
     * @return {{center: THREE.Vector3, size: THREE.Vector3}} An object containing the computed centre and size of the bounding box that encompasses all solid meshes.
     */
    function fitCameraToModel() {
        const camera = getCamera();
        const box = new THREE.Box3();

        solidMeshes.forEach(mesh => {
            box.expandByObject(mesh);
        });

        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z);
        const distance = maxDimension * CAMERA_DISTANCE_SCALE;

        camera.position.set(
            center.x - distance * CAMERA_OFFSET_SCALE,
            center.y - distance * CAMERA_OFFSET_SCALE,
            center.z + distance * CAMERA_OFFSET_SCALE
        );

        camera.near = distance * CAMERA_NEAR_SCALE;
        camera.far = distance * CAMERA_FAR_SCALE;
        camera.zoom = 1; // discard any orthographic zoom accumulated on the previous model
        camera.updateProjectionMatrix();

        controls.target.copy(center);
        syncProjection();
        controls.update();

        initialCameraPosition = camera.position.clone();
        initialCameraTarget = controls.target.clone();
        initialCameraZoom = camera.zoom;

        return {center, size};
    }

    /**
     * Restores the camera to the position, target, and zoom recorded by the last fitCameraToModel() call.
     *
     * The recorded position is projection-independent — both cameras are fitted by the same formula —
     * so a reset works as expected even if the projection was toggled since the model was loaded.
     *
     * @return {void}
     */
    function resetCamera() {
        if (!initialCameraPosition) return;

        const camera = getCamera();

        camera.position.copy(initialCameraPosition);
        camera.zoom = initialCameraZoom;
        camera.updateProjectionMatrix();

        controls.target.copy(initialCameraTarget);
        syncProjection();
        controls.update();
    }

    return {
        solidMeshes,
        solidEdges,
        solidVertices,
        clearScene,
        fitCameraToModel,
        resetCamera,
    };
}
