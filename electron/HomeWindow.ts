import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

 const assetsPath =
   process.env.NODE_ENV === 'production'
     ? process.resourcesPath
     : app.getAppPath()

export class HomeWindow {
  public readonly window: BrowserWindow

  constructor() {
    this.window = this.createWindow()
  }

  createWindow(): BrowserWindow {
    const window = new BrowserWindow({
      icon: join(assetsPath, 'assets', 'icon.png'),
      width: 400,
      height: 400,
      show: false,
      backgroundColor: '#191622',
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
      }
    })

    window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    this.registerListeners()

    return window
  }

  /**
   * Use this to register your events listeners
   */
  private async registerListeners() {
    /**
     * This comes from bridge integration, check bridge.ts
     */
    ipcMain.on('message', (_, message) => {
      console.log(message)
    })
  }
}
