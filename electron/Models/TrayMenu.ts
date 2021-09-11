import { app, Tray, nativeImage, Menu } from 'electron'
import {appManager} from '../AppManager'

export class TrayMenu {
  public readonly tray: Tray

  private iconPath: string = '/assets/icon.png'

  constructor() {
    this.tray = new Tray(this.createNativeImage())
    this.tray.setContextMenu(this.createMenu())
  }

  createNativeImage() {
    const path = `${app.getAppPath()}${this.iconPath}`
    const image = nativeImage.createFromPath(path)
    image.setTemplateImage(true)
    return image
  }

  createMenu(): Menu {
    return Menu.buildFromTemplate([
      {
        label: 'Configure',
        type: 'normal',
        click: () => {
          appManager.getWindow('HomeWindow').window.show()
        }
      },
      {
        label: 'Quit',
        type: 'normal',
        click: app.quit
      }
    ])
  }
}
