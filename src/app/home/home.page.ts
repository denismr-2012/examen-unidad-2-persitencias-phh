import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardContent, IonText, IonIcon, IonFabButton, IonFab, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline, close, add  } from 'ionicons/icons'
import { Configuracion } from '../Servicios/configuracion';
import { GestorDeCitas } from '../Servicios/gestor-de-citas';
import { Cita } from '../modelo/cita';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true ,
  imports: [IonButton, IonButtons, IonFab, IonFabButton, IonIcon, IonText, IonCardContent, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent ],
})
export class HomePage implements OnInit {

    randomCita: Cita = {
      cita: "Lorem Ipsum",
      autor: "Dolor Est",
      
    }

  toggleCheckValue: boolean = false

  constructor(private GestorDeCitasService:GestorDeCitas, 
    private configuracionService:Configuracion 
  ) {
    addIcons({close,add,settingsOutline}); 
  }

  async ngOnInit() {
    
    await this.GestorDeCitasService.startPlugin() 

    console.log(this.randomCita) 
    console.log(this.toggleCheckValue)
  }

  async ionViewWillEnter(){
    console.log("ionViewWIllEnter") 

    this.toggleCheckValue = await this.configuracionService.getDeleteFromHomePage() 

    this.randomCita = await this.GestorDeCitasService.getCitaListRandom() 

    await this.GestorDeCitasService.startPlugin() 
  }

  toggleCheck() { return this.toggleCheckValue } 

  async deleteCitaHomePage() { 
    await this.GestorDeCitasService.deleteCita(this.randomCita.id ?? 0)
    this.randomCita = await this.GestorDeCitasService.getCitaListRandom()
    }
  
}
