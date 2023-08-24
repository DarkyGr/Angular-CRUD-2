import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvionService } from '../../Servicios/avion.service';

@Component({
  selector: 'app-agregar-avion',
  templateUrl: './agregar-avion.component.html',
  styleUrls: ['./agregar-avion.component.css']
})
export class AgregarAvionComponent {

  @ViewChild("tipoAvion")
  private tipoAvion!: ElementRef

  @ViewChild("capacidadPasajeros")
  private capacidadPasajeros!: ElementRef

  constructor(private service: AvionService) {

  }

  guardar() {
    // Constante del metodo = valor del html
    const tipoAvion = this.tipoAvion.nativeElement.value;
    const codigo = "Prueba";
    const horasVuelo = 0.0;
    const capacidadPasajeros = this.capacidadPasajeros.nativeElement.value;
    // const disponibilidad = this.disponibilidad;

    this.service.InsertarAvion(tipoAvion, codigo, horasVuelo, capacidadPasajeros);
  }
}
