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

// ipcMain.on('goToHome', () => {
//   win.loadFile('./Pages/Home.html');
// });

// ipcMain.on('goBack', () => {
//   win.loadFile('index.html');
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow();
// });

