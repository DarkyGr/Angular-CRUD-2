import { Component, ElementRef, ViewChild } from '@angular/core';
import { AeropuertoService } from '../../Servicios/aeropuerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-aeropuerto',
  templateUrl: './agregar-aeropuerto.component.html',
  styleUrls: ['./agregar-aeropuerto.component.css']
})
export class AgregarAeropuertoComponent {

  @ViewChild("nombre")
  private nombre!: ElementRef

  @ViewChild("municipio")
  private municipio!: ElementRef

  @ViewChild("estado")
  private estado!: ElementRef

  @ViewChild("pais")
  private pais!: ElementRef

  constructor(private service: AeropuertoService) {

  }

  guardar() {
    // Constante del metodo = valor del html
    const nombre = this.nombre.nativeElement.value;
    const municipio = this.municipio.nativeElement.value;
    const estado = this.estado.nativeElement.value;
    const pais = this.pais.nativeElement.value;
    // const disponibilidad = this.disponibilidad;

    if (nombre != "" && municipio != "" && estado != "" && pais != "") {
      this.service.InsertarAeropuerto(nombre, municipio, estado, pais);
    }else{
      Swal.fire({
        title: 'Advertencia!',
        text: 'Ningún campo puede quedar vacío.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
  }
}
