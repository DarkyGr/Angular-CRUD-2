import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvionService } from '../../Servicios/avion.service';
import Swal from 'sweetalert2';

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
    service.GetTipoAviones();
  }

  guardar() {
    // Constante del metodo = valor del html
    const ultimo = this.listaAviones.length - 1;
    const avionU = this.listaAviones[ultimo];

    // Get el ultimo ID y asignar el codigo
    const ultimoId = avionU.AvionId + 1;
    var codigo = this.codigoAvion(ultimoId);

    // const codigo = "Prueba";
    const tipoAvion = this.tipoAvion.nativeElement.value;
    const horasVuelo = 0.0;
    const capacidadPasajeros = this.capacidadPasajeros.nativeElement.value;

    if (capacidadPasajeros != "" && capacidadPasajeros > 0) {
      this.service.InsertarAvion(tipoAvion, codigo, horasVuelo, capacidadPasajeros);
    }else{
      Swal.fire({
        title: 'Advertencia!',
        text: 'El campo Capacidad de pasajeros no puede quedar vacío y debe ser mayor a 0.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
    // const disponibilidad = this.disponibilidad;

  }

  get listaAviones() {
    this.service.GetAviones;
    return this.service.listaAviones;
  }

  get listaTiposAviones() {
    this.service.GetTipoAviones;
    // console.log(this.service.listaTiposAviones);
    return this.service.listaTiposAviones;
  }

  codigoAvion(ultimoId: number) {
    var codigo1 = "";

    if (ultimoId < 10) {
      codigo1 = "AV-" + "000" + ultimoId;
    } else if (ultimoId < 100) {
      codigo1 = "AV-" + "00" + ultimoId;
    } else if (ultimoId < 1000) {
      codigo1 = "AV-" + "0" + ultimoId;
    } else if (ultimoId < 10000) {
      codigo1 = "AV-" + ultimoId;
    }

    return codigo1;
  }
}
