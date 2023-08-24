import { Component, ElementRef, ViewChild } from '@angular/core';
import { PilotoService } from '../../Servicios/piloto.service';

@Component({
  selector: 'app-agregar-piloto',
  templateUrl: './agregar-piloto.component.html',
  styleUrls: ['./agregar-piloto.component.css']
})
export class AgregarPilotoComponent {
  
  @ViewChild("nombre")
  private nombre!: ElementRef

  @ViewChild("sexo")
  private sexo!: ElementRef

  constructor(private service: PilotoService) {

  }

  guardar() {
    // Constante del metodo = valor del html
    const codigo = "Prueba";
    const nombre = this.nombre.nativeElement.value;
    const sexo = this.sexo.nativeElement.value;
    const horasVuelo = 0.0;
    // const disponibilidad = this.disponibilidad;

    this.service.InsertarPiloto(codigo, nombre, sexo, horasVuelo);
  }
}
