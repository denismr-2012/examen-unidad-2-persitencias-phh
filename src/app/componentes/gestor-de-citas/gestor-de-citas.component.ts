import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonList, IonItem, IonCardHeader, IonIcon, IonButton, IonCardSubtitle, IonCardTitle } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-gestor-de-citas',
  templateUrl: './gestor-de-citas.component.html',
  styleUrls: ['./gestor-de-citas.component.scss'],
  standalone: true,
  imports: [IonCardTitle,  IonCard, IonList, IonItem, IonCardHeader, IonIcon, IonButton, IonCardSubtitle ]
})
export class GestorDeCitasComponent  implements OnInit {

  
  @Input() citas:Cita[] = [] 
  @Output() onDelete = new EventEmitter<{id: number}>() 
deleteCita: any;


  constructor() {
    addIcons({trashOutline})
  }

  ngOnInit() {
    

  }

}
