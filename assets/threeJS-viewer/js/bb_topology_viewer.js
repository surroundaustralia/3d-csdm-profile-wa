import { initScene } from './viewer_scene.js';
import { initControls } from './viewer_controls.js';
import { initViewerApp } from './viewer_app.js';

// ─── Viewer dimensions ────────────────────────────────────────────────────────

const VIEWER_WIDTH = 500;
const VIEWER_HEIGHT = 500;

// ─── Initialisation ───────────────────────────────────────────────────────────

const sceneObjects = initScene(VIEWER_WIDTH, VIEWER_HEIGHT, document.getElementById('sceneContainer'));
const viewerControls = initControls(sceneObjects);

initViewerApp({
    sceneObjects,
    viewerControls,
    initialModel: 'data/derived-3d-solid.json',
});
