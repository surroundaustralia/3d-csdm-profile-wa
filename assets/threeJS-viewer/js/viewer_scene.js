import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ─── Scene constants ──────────────────────────────────────────────────────────

const SCENE_BACKGROUND_COLOR = 0xadb1b1;
const CAMERA_FOV = 75;
const CAMERA_INITIAL_NEAR = 0.1;
const CAMERA_INITIAL_FAR = 10000;
const CAMERA_INITIAL_X = -2;
const CAMERA_INITIAL_Y = -2;
const CAMERA_INITIAL_Z = 2;
const CONTROLS_DAMPING_FACTOR = 0.05;
const LIGHT_COLOR = 0xffffff;
const AMBIENT_LIGHT_INTENSITY = 0.5;
const KEY_LIGHT_INTENSITY = 0.8;
const FILL_LIGHT_INTENSITY = 0.3;
const LIGHT_DISTANCE = 100;
const GRID_SIZE = 100;
const GRID_DIVISIONS = 20;
const GRID_CENTER_COLOR = 0x444444;
const GRID_LINE_COLOR = 0x222222;
const AXES_SIZE = 1;
const GRID_ROTATION_X = Math.PI / 2;
const CAMERA_UP_X = 0;
const CAMERA_UP_Y = 0;
const CAMERA_UP_Z = 1;

// ─── Projection modes ─────────────────────────────────────────────────────────

export const PROJECTION_PERSPECTIVE = 'perspective';
export const PROJECTION_ORTHOGRAPHIC = 'orthographic';

// Half-height of the orthographic frustum before a model has been fitted. Replaced on the first
// setProjection()/syncProjection() call, which derives it from the camera's distance to the target.
const ORTHO_INITIAL_HALF_HEIGHT = 1;

// Guards against a degenerate (zero-area) frustum when the camera sits on the controls target.
const MIN_FRUSTUM_HALF_HEIGHT = 1e-6;

// ─── Scene factory ────────────────────────────────────────────────────────────

/**
 * Initialises the Three.js scene, cameras, renderer, controls, lights, grid, and axes helper.
 * Call once per viewer with the desired canvas dimensions.
 *
 * Both a perspective and an orthographic camera are built up front; only one is active at a time.
 * Consumers must read the active camera through getCamera() rather than holding a reference, because
 * setProjection() swaps which instance is active.
 *
 * @param {number}      width     - Canvas width in pixels.
 * @param {number}      height    - Canvas height in pixels.
 * @param {HTMLElement} container - DOM element to which the renderer canvas is appended.
 * @return {{
 *   scene: THREE.Scene,
 *   getCamera: () => (THREE.PerspectiveCamera|THREE.OrthographicCamera),
 *   getProjection: () => string,
 *   setProjection: (mode: string) => void,
 *   syncProjection: () => void,
 *   renderer: THREE.WebGLRenderer,
 *   controls: OrbitControls,
 *   gridHelper: THREE.GridHelper,
 *   axesHelper: THREE.AxesHelper,
 *   animate: () => void,
 *   handleResize: () => void
 * }} The initialised scene objects and the projection/animation/resize callbacks.
 */
export function initScene(width, height, container) {

    // ─── Scene ────────────────────────────────────────────────────────────────

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(SCENE_BACKGROUND_COLOR);

    // Current canvas dimensions, tracked so the orthographic frustum can be rebuilt at the right
    // aspect ratio after a resize.
    let viewWidth = width;
    let viewHeight = height;

    // ─── Cameras ──────────────────────────────────────────────────────────────

    const perspectiveCamera = new THREE.PerspectiveCamera(CAMERA_FOV, width / height, CAMERA_INITIAL_NEAR, CAMERA_INITIAL_FAR);
    perspectiveCamera.up.set(CAMERA_UP_X, CAMERA_UP_Y, CAMERA_UP_Z); // Z-up coordinate system
    perspectiveCamera.position.set(CAMERA_INITIAL_X, CAMERA_INITIAL_Y, CAMERA_INITIAL_Z);

    const orthographicCamera = new THREE.OrthographicCamera(
        -ORTHO_INITIAL_HALF_HEIGHT * (width / height),
        ORTHO_INITIAL_HALF_HEIGHT * (width / height),
        ORTHO_INITIAL_HALF_HEIGHT,
        -ORTHO_INITIAL_HALF_HEIGHT,
        CAMERA_INITIAL_NEAR,
        CAMERA_INITIAL_FAR
    );
    orthographicCamera.up.set(CAMERA_UP_X, CAMERA_UP_Y, CAMERA_UP_Z);
    orthographicCamera.position.copy(perspectiveCamera.position);
    orthographicCamera.quaternion.copy(perspectiveCamera.quaternion);

    let activeCamera = perspectiveCamera;
    let projection = PROJECTION_PERSPECTIVE;

    // ─── Renderer ─────────────────────────────────────────────────────────────

    // WebGL renderer with antialiasing; canvas is appended to the container.
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // ─── Controls ─────────────────────────────────────────────────────────────

    const controls = new OrbitControls(activeCamera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = CONTROLS_DAMPING_FACTOR;

    // ─── Lights ───────────────────────────────────────────────────────────────

    const ambientLight = new THREE.AmbientLight(LIGHT_COLOR, AMBIENT_LIGHT_INTENSITY);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(LIGHT_COLOR, KEY_LIGHT_INTENSITY);
    directionalLight1.position.set(LIGHT_DISTANCE, LIGHT_DISTANCE, LIGHT_DISTANCE);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(LIGHT_COLOR, FILL_LIGHT_INTENSITY);
    directionalLight2.position.set(-LIGHT_DISTANCE, -LIGHT_DISTANCE, -LIGHT_DISTANCE);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(LIGHT_COLOR, FILL_LIGHT_INTENSITY);
    directionalLight3.position.set(0, -LIGHT_DISTANCE, 0);
    scene.add(directionalLight3);

    // ─── Grid and axes ────────────────────────────────────────────────────────

    const gridHelper = new THREE.GridHelper(GRID_SIZE, GRID_DIVISIONS, GRID_CENTER_COLOR, GRID_LINE_COLOR);
    gridHelper.rotation.x = GRID_ROTATION_X; // rotate XZ plane to XY for Z-up coordinate system
    gridHelper.visible = false;
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(AXES_SIZE);
    scene.add(axesHelper);

    // ─── Projection control ───────────────────────────────────────────────────

    /**
     * Half-height of the view volume at the controls target for the perspective camera.
     * This is the quantity matched when converting between the two projections, so that a switch
     * leaves geometry at the target plane the same on-screen size.
     *
     * @param {number} distance - Distance from the camera to the controls target.
     * @return {number} The half-height of the perspective frustum at that distance.
     */
    function _halfHeightAtDistance(distance) {
        return distance * Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2));
    }

    /**
     * Resizes the orthographic frustum to the given half-height, deriving the half-width from the
     * current canvas aspect ratio. Vertical extent is authoritative, matching the way the perspective
     * camera keeps a fixed vertical FOV and widens with the aspect ratio.
     *
     * @param {number} halfHeight - Desired unzoomed half-height of the frustum.
     * @return {void}
     */
    function _setOrthographicHalfHeight(halfHeight) {
        const safeHalfHeight = Math.max(halfHeight, MIN_FRUSTUM_HALF_HEIGHT);
        const halfWidth = safeHalfHeight * (viewWidth / viewHeight);

        orthographicCamera.top = safeHalfHeight;
        orthographicCamera.bottom = -safeHalfHeight;
        orthographicCamera.left = -halfWidth;
        orthographicCamera.right = halfWidth;
        orthographicCamera.updateProjectionMatrix();
    }

    /**
     * Returns the currently active camera. Call this on each use rather than caching the result —
     * setProjection() swaps the instance.
     *
     * @return {THREE.PerspectiveCamera|THREE.OrthographicCamera} The active camera.
     */
    function getCamera() {
        return activeCamera;
    }

    /**
     * Returns the active projection mode.
     *
     * @return {string} Either PROJECTION_PERSPECTIVE or PROJECTION_ORTHOGRAPHIC.
     */
    function getProjection() {
        return projection;
    }

    /**
     * Rebuilds the orthographic frustum from the camera's current distance to the controls target.
     * Call after moving the camera or the target (for example from fitCameraToModel or resetCamera);
     * a no-op while the perspective camera is active, since setProjection() derives the frustum at
     * switch time instead.
     *
     * Orbiting and panning both preserve the camera-to-target distance, and orthographic zoom is
     * applied through camera.zoom rather than by dollying, so the frustum stays correct between calls.
     *
     * @return {void}
     */
    function syncProjection() {
        if (projection !== PROJECTION_ORTHOGRAPHIC) return;

        const distance = orthographicCamera.position.distanceTo(controls.target);
        _setOrthographicHalfHeight(_halfHeightAtDistance(distance));
    }

    /**
     * Switches between perspective and orthographic projection, preserving the framing.
     *
     * Going to orthographic, the frustum is sized to the perspective view volume at the target plane.
     * Coming back, any accumulated orthographic zoom is converted into a camera distance that
     * reproduces the same view volume, so repeated toggling is stable rather than drifting.
     *
     * @param {string} mode - Either PROJECTION_PERSPECTIVE or PROJECTION_ORTHOGRAPHIC.
     * @return {void}
     */
    function setProjection(mode) {
        if (mode === projection) return;

        if (mode === PROJECTION_ORTHOGRAPHIC) {
            const distance = perspectiveCamera.position.distanceTo(controls.target);

            orthographicCamera.position.copy(perspectiveCamera.position);
            orthographicCamera.quaternion.copy(perspectiveCamera.quaternion);
            orthographicCamera.near = perspectiveCamera.near;
            orthographicCamera.far = perspectiveCamera.far;
            orthographicCamera.zoom = 1;

            activeCamera = orthographicCamera;
            projection = PROJECTION_ORTHOGRAPHIC;
            _setOrthographicHalfHeight(_halfHeightAtDistance(distance));
        } else {
            // camera.top is the unzoomed half-height; three.js divides by camera.zoom when building
            // the projection matrix, so the visible half-height is top / zoom.
            const visibleHalfHeight = orthographicCamera.top / orthographicCamera.zoom;
            const distance = visibleHalfHeight / Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2));
            const offset = new THREE.Vector3().subVectors(orthographicCamera.position, controls.target);

            perspectiveCamera.quaternion.copy(orthographicCamera.quaternion);
            perspectiveCamera.near = orthographicCamera.near;
            perspectiveCamera.far = orthographicCamera.far;
            perspectiveCamera.zoom = 1;

            // A zero offset would normalise to (0,0,0) and drop the camera onto the target; leaving the
            // perspective camera where it was is the safer degenerate-case fallback.
            if (offset.lengthSq() > 0) {
                perspectiveCamera.position
                    .copy(controls.target)
                    .addScaledVector(offset.normalize(), distance);
            }

            perspectiveCamera.updateProjectionMatrix();
            activeCamera = perspectiveCamera;
            projection = PROJECTION_PERSPECTIVE;
        }

        controls.object = activeCamera;
        controls.update();
    }

    // ─── Animation loop ───────────────────────────────────────────────────────

    /**
     * Animates the scene by updating controls and rendering the scene with the active camera.
     * Uses requestAnimationFrame for a continuous render loop.
     *
     * @return {void}
     */
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, activeCamera);
    }

    // ─── Resize handler ───────────────────────────────────────────────────────

    /**
     * Updates both cameras and the renderer size to match the current window dimensions.
     * Wire to window 'resize' events in responsive (full-window) entry points.
     *
     * The orthographic frustum keeps its vertical extent and re-derives its width from the new aspect
     * ratio, so a resize does not change the zoom level.
     *
     * @return {void}
     */
    function handleResize() {
        viewWidth = window.innerWidth;
        viewHeight = window.innerHeight;

        perspectiveCamera.aspect = viewWidth / viewHeight;
        perspectiveCamera.updateProjectionMatrix();
        _setOrthographicHalfHeight(orthographicCamera.top);

        renderer.setSize(viewWidth, viewHeight);
    }

    return {
        scene,
        getCamera,
        getProjection,
        setProjection,
        syncProjection,
        renderer,
        controls,
        gridHelper,
        axesHelper,
        animate,
        handleResize,
    };
}
