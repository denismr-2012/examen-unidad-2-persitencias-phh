import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { GestorDeCitas } from 'src/app/Servicios/gestor-de-citas';
import { GestorDeCitasComponent } from "../gestor-de-citas/gestor-de-citas.component";
import { FormularioCitasComponent } from "../formulario-citas/formulario-citas.component";

@Component({
  selector: 'app-administrador-de-citas',
  templateUrl: './administrador-de-citas.component.html',
  styleUrls: ['./administrador-de-citas.component.scss'],
  standalone: true,
  imports: [GestorDeCitasComponent, FormularioCitasComponent],
})
export class AdministradorDeCitasComponent  implements OnInit {
  CitaList: Cita[] | undefined;
  CitasList: any;
  Cita: Cita[] | undefined;

  constructor(private GestorDeCitasService:GestorDeCitas) { }

  async ngOnInit() {
    await this.GestorDeCitasService.startPlugin()
    await this.update()
  }

  private async update(){ 
    this.CitaList = await this.GestorDeCitasService.getCitaList()
  }

  async onCreateCita($event: Cita) { 
    await this.GestorDeCitasService.addCita($event)
    await this.update()
  }

  async onDeleteCita($event: number) { 
    console.log($event)
    await this.GestorDeCitasService.deleteCita($event)
    await this.update()
  }
}
