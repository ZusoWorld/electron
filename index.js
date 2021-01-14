const { app, BrowserWindow, Menu } = require('electron');
const { join } = require("path");
let modules = [];

let window;
app.on("ready", () => {
  const loading = new BrowserWindow({
    movable: false,
    transparent: true,
    darkTheme: true,
    center: true,
    width: 300,
    height: 400,
    frame: false,
    titleBarStyle: 'hidden',
    icon: "./src/img/icon.ico"
  })
  loading.loadFile(join(__dirname+"/src/views/loading.html"))

  setTimeout(() => {
    window = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true
      },
      enableLargerThanScreen: false,
      movable: true,
      width: 800,
      height: 600,
      title: "Gravitalia",
      icon: "./src/img/icon.ico"
    })
    window.loadFile(join(__dirname+"/src/views/index.ejs"))

    setTimeout(() => {
      loading.destroy()
    }, 2000)
  }, 4000)
})