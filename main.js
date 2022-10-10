// Modules to control application life and create native browser window
const {app, BrowserWindow,Menu} = require('electron')
const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform === 'darwin'

function createMainWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: "Renderer",
    width: isDev ? 1000 : 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  //open dev tools if in dev enviroment
  if(isDev) {
    mainWindow.webContents.openDevTools();
  }

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))

}

function createAboutWindow ()
{
  const aboutWindow = new BrowserWindow({
    title: "About",
    width: isDev ? 1000 : 800,
    height: 600,
  })

  aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'))
}

function createGalleryWindow ()
{
  const galleryWindow = new BrowserWindow({
    title: "Gallery",
    width: isDev ? 1000 : 800,
    height: 600,
  })

  galleryWindow.loadFile(path.join(__dirname, './renderer/gallery.html'))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createMainWindow()

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

const menu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        click: () => app.quit(),
        accelerator: 'CmdOrCtrl+W'
      }
    ]
  },
  {
    label: 'Gallery',
    submenu: [
      {
        label: 'Images',
        click: createGalleryWindow,
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        click: createAboutWindow,
      }
    ]
  }
]

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (!isMac) app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
