import { initScene } from './viewer_scene.js';
import { initControls } from './viewer_controls.js';
import { initViewerApp } from './viewer_app.js';

// ─── Initialisation ───────────────────────────────────────────────────────────

const sceneObjects = initScene(window.innerWidth, window.innerHeight, document.getElementById('sceneContainer'));
const viewerControls = initControls(sceneObjects);

initViewerApp({
    sceneObjects,
    viewerControls,
    modelSelectId: 'modelSelect',
});

window.addEventListener('resize', sceneObjects.handleResize);
