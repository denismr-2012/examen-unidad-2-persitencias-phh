import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GestorDeCitas } from 'src/app/Servicios/gestor-de-citas';
import { RouterLink } from '@angular/router';
import { Configuracion } from 'src/app/Servicios/configuracion';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConfiguracionesPage implements OnInit {

  toggleCheck: boolean = false
  
  constructor(private GestorDeCitasService:GestorDeCitas 
  )  { }

  async ngOnInit() {
    this.toggleCheck = await this.GestorDeCitasService.getDeleteFromHomePage()
  }

   async toggleChange() { 
    await this.GestorDeCitasService.getDeleteFromHomePage(this.toggleCheck)
  }

}
