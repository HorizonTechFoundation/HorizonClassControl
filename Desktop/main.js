const { app, BrowserWindow, screen } = require('electron');
let win;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const winWidth = Math.floor(width * 0.7);
  const winHeight = Math.floor(winWidth * 1 / 1.55);
  win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  win.center();


  win.loadURL('http://localhost:5173/');
}

app.whenReady().then(createWindow);
