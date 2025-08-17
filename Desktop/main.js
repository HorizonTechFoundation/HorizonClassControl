const { app, BrowserWindow, ipcMain } = require('electron');
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,   // starting width
    height: 720,   // starting height
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    resizable: true,   // allow resizing
  });

  // Set aspect ratio 16:9
  win.setAspectRatio(16 / 9);


  win.loadURL('http://localhost:5173/');
}

app.whenReady().then(createWindow);
