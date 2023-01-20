
// const ipc = window.require('electron').ipcRenderer;

// Function that will be called on click 
// event of "Go to Nav window" button
function goToNavigatorWindow() {
    // Make sure to do ipc.send('some String'), 
    // where 'some String' must be same with 
    // the first parameter of ipcMain.on() in app.js 
    // ipc.send('openChildWindow');
    //mainWindow.loadFile('pages/main.html')

    document.getElementById('nav-button').onclick = function () {
        document.body.innerHTML = `<div>
        <h1>MAIN</h1>
    
        <p>A skeleton Electron application employing multiple pages. Implements a lightweight SPA using HTML5 template preloading with 
            Bootstrap tabs for routing/navigation</p>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam.</p>
        <a class="btn btn-secondary btn-lg mt-4" href="#" role="button">Executare</a>
        </div>`;
    }
}

console.log(document.getElementById('nav-button'));

document.getElementById('nav-button').onclick = function () {
    console.log("button click event!");
    window.location.replace("pages/test.html");
}

