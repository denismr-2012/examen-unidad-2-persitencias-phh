import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonItem, IonInput, IonButton, IonCardTitle, IonText } from "@ionic/angular/standalone";
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-formulario-citas',
  templateUrl: './formulario-citas.component.html',
  styleUrls: ['./formulario-citas.component.scss'],
  standalone: true,
  imports: [ IonCard, IonCardHeader, IonItem, IonInput, IonButton, IonCardTitle, IonText, FormsModule ]
})
export class FormularioCitasComponent  implements OnInit {

  cita: string = "" 
  autor: string = "" 
  newCita!:Cita 
  @Output() onCreate = new EventEmitter<Cita>() 
  
  constructor() { }

onClick(){ 
    this.createCita()
    this.onCreate.emit(this.newCita)
  }

  createCita() { 
    this.newCita = {cita: this.cita, autor: this.autor}
  }

  ngOnInit() {}


}
