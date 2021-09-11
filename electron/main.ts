import { app } from 'electron'
import {TrayMenu} from './Models/TrayMenu'
import {appManager} from './AppManager'
import {HomeWindow} from './HomeWindow'

app.on('ready', () => {
  appManager.setTray(new TrayMenu())
  appManager.setWindow('HomeWindow', new HomeWindow())
})

// app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
    // app.quit()
  // }
// })

// app.on('activate', () => {
  // if (BrowserWindow.getAllWindows().length === 0) {
    // createWindow()
  // }
// })
