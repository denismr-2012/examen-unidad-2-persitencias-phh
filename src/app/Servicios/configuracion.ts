import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class Configuracion { 
  
  private readonly DELETE_FROM_HOMEPAGE_KEY = "DELETE_FROM_HOMEPAGE" 

  constructor() { }

  async getDeleteFromHomePage(): Promise<boolean> { 
    const deleteFromHomePage = await Preferences.get({key: this.DELETE_FROM_HOMEPAGE_KEY})
    return deleteFromHomePage?.value == "true" ? true : false
  }
  
  async setDeleteFromHomePage(valCheck: boolean):Promise<void> { 
    await Preferences.set({
      key: this.DELETE_FROM_HOMEPAGE_KEY,
      value: valCheck ? "true" : "false"
    })
  }
  
}
