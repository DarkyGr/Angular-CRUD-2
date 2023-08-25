import { Component, ElementRef, ViewChild } from '@angular/core';
import { VueloService } from '../../Servicios/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-vuelo',
  templateUrl: './agregar-vuelo.component.html',
  styleUrls: ['./agregar-vuelo.component.css']
})
export class AgregarVueloComponent {
  @ViewChild("aeropuertoOrigenId")
  private aeropuertoOrigenId!: ElementRef

  @ViewChild("aeropuertoDestinoId")
  private aeropuertoDestinoId!: ElementRef

  @ViewChild("avionId")
  private avionId!: ElementRef

  @ViewChild("pilotoId")
  private pilotoId!: ElementRef

  @ViewChild("estatusId")
  private estatusId!: ElementRef

  @ViewChild("fechaSalida")
  private fechaSalida!: ElementRef

  @ViewChild("fechaLlegadaEstimada")
  private fechaLlegadaEstimada!: ElementRef

  @ViewChild("fechaLlegadaReal")
  private fechaLlegadaReal!: ElementRef

  constructor(private service: VueloService) {
    service.GetAeropuertos();
    service.GetAviones();
    service.GetPilotos();
    service.GetEstatus();
  }

  guardar() {
    // Constante del metodo = valor del html
    const aeropuertoOrigenId = this.aeropuertoOrigenId.nativeElement.value;
    const aeropuertoDestinoId = this.aeropuertoDestinoId.nativeElement.value;
    const avionId = this.avionId.nativeElement.value;
    const pilotoId = this.pilotoId.nativeElement.value;
    const estatusId = 1;
    const fechaSalida = this.fechaSalida.nativeElement.value;
    const fechaLlegadaEstimada = this.fechaLlegadaEstimada.nativeElement.value;
    const fechaLlegadaReal = this.fechaLlegadaEstimada.nativeElement.value;
    const hoy = Date();

    // Nombre del vuelo
    const nombre = this.nombreVuelo(aeropuertoOrigenId, aeropuertoDestinoId) + ((new Date(hoy)).toLocaleTimeString()).substring(0, 2) + ((new Date(hoy)).toLocaleTimeString()).substring(3, 5);

    // Pruebas de Un dia mas en la fecha obtenida en el date pickr
    // console.log("Hoy: " + new Date(hoy));
    // console.log("Fecha Salida: " + this.masUnDia(fechaSalida));
    // console.log("Fecha Llegada Estimada: " + this.masUnDia(fechaLlegadaEstimada));

    // Horas del vuelo    
    let resta = this.masUnDia(fechaLlegadaEstimada).getTime() - this.masUnDia(fechaSalida).getTime();
    const horasVuelo = Math.round(resta / ((1000*60*60) + 24));
    // console.log(horasVuelo);

    // Validaciones de no valores 0 en los dropdown y fechas no iguales
    if (aeropuertoOrigenId != 0 && aeropuertoDestinoId != 0 && avionId != 0 && pilotoId != 0 && fechaSalida != "" && fechaLlegadaEstimada != "") {
      if (this.masUnDia(fechaSalida) > new Date(hoy) &&
        this.masUnDia(fechaLlegadaEstimada) > this.masUnDia(fechaSalida)) {
        this.service.InsertarVuelo(aeropuertoOrigenId, aeropuertoDestinoId, avionId, pilotoId, estatusId, nombre, fechaSalida, fechaLlegadaEstimada, fechaLlegadaReal, horasVuelo);
        // console.log("Si");
      } else {
        Swal.fire({
          title: 'Advertencia!',
          text: 'La fecha salida debe ser mayor a la fecha actual, la fecha de llegada estimada debe ser mayor a la fecha de salida.',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }
    } else {
      Swal.fire({
        title: 'Advertencia!',
        text: 'Ningún campo puede quedar vacío.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
  }

  get listaAeropuertos() {
    this.service.GetAeropuertos;
    // console.log(this.service.listaTiposAviones);
    return this.service.listaAeropuertos;
  }

  get listaAviones() {
    this.service.GetAviones;
    // console.log(this.service.listaTiposAviones);
    return this.service.listaAviones;
  }

  get listaPilotos() {
    this.service.GetPilotos;
    // console.log(this.service.listaTiposAviones);
    return this.service.listaPilotos;
  }

  get listaEstatus() {
    this.service.GetEstatus;
    // console.log(this.service.listaTiposAviones);
    return this.service.listaEstatus;
  }

  // Get 3 primeras letras de los aeropuertos (por Estados)
  nombreVuelo(aeropuertoOrigenId: number, aeropuertoDestinoId: number) {
    let AeropuertoOrigen = null;
    let AeropuertoDestino = null;

    for (let index = 0; index < this.listaAeropuertos.length; index++) {
      if (aeropuertoOrigenId == (this.listaAeropuertos[index]).AeropuertoId) {
        AeropuertoOrigen = this.listaAeropuertos[index];
      }

      if (aeropuertoDestinoId == (this.listaAeropuertos[index]).AeropuertoId) {
        AeropuertoDestino = this.listaAeropuertos[index];
      }
    }

    const nombreV = (AeropuertoOrigen.Estado.substring(0, 3)).toUpperCase() + AeropuertoDestino.Estado.substring(0, 3).toUpperCase() + "-";
    // console.log(nombreV);
    return nombreV;
  }

  // Sumar un dia (por el date picker)
  masUnDia(fecha: Date) {
    const masUnDia = (1000 * 60 * 60 * 24);
    return new Date((new Date(fecha)).getTime() + masUnDia);
  }
}
