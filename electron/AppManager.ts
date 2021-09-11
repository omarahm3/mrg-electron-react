import {HomeWindow} from "./HomeWindow";
import {TrayMenu} from "./Models/TrayMenu";

export type ManagerTypes = HomeWindow

class AppManager {
  private trayMenu !: TrayMenu
  private windowManager : Map<string, ManagerTypes> = new Map()

  setTray(tray: TrayMenu) {
    this.trayMenu = tray
  }

  getTray(): TrayMenu {
    return this.trayMenu
  }

  setWindow(name: string, element: ManagerTypes): void {
    this.windowManager.set(name, element)
  }

  getWindow(name: string): ManagerTypes {
    const window = this.windowManager.get(name)

    if (!window) {
      throw new Error(`[AppManager] - Window with name ${name} does not exist`)
    }
    
    return window
  }

  deleteWindow(name: string): void {
    this.windowManager.delete(name)
  }
}

export const appManager = new AppManager()
