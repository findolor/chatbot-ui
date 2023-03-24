// @ts-ignore
const { app, BrowserWindow } = require("electron")
// import * as path from 'path'
// import * as url from 'url'

// @ts-ignore
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadURL('http://localhost:3001')

  mainWindow.on("closed", function () {
    mainWindow = null
  })
}

app.on("ready", createWindow)

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", function () {
  // @ts-ignore
  if (mainWindow === null) {
    createWindow()
  }
})
