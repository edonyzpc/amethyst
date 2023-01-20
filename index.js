// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron')
const path = require('path')
var mainWindow = undefined


const createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: screen.getPrimaryDisplay().workAreaSize.width,
        height: screen.getPrimaryDisplay().workAreaSize.height,
        webPreferences: {
            preload: path.join(__dirname, 'src/preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}

// Function to create child window of parent one
/*
function createChildWindow() {
    childWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        modal: true,
        show: false,
        parent: mainWindow, // Make sure to add parent window here

        // Make sure to add webPreferences with below configuration
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    // Child window loads settings.html file
    childWindow.loadFile("settings.html");

    childWindow.once("ready-to-show", () => {
        childWindow.show();
    });
}

ipcMain.on("openChildWindow", (event, arg) => {
    createChildWindow();
});
*/

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.