/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const canvas = document.getElementById('fractal-canvas');
const saveBtn = document.getElementById('save-fractal');

function initCanvas(canvas) {
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = document.body.clientHeight; //document.height is obsolete
    canvas.style.backgroundColor = 'red';
}

function saveImage() {

    alertError('Error saving image');

    /*if(!fs.existsSync(dest)) {

    }*/
}

function alertError(message)
{
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'red',
            color: 'white',
            textAlign: 'center'
        }
    })
}

saveBtn.addEventListener('click', e => {
    saveImage();
})

initCanvas(canvas);