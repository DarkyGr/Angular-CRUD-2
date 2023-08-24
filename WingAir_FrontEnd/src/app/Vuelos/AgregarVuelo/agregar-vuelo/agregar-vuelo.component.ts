import { Component, ElementRef, ViewChild } from '@angular/core';
import { VueloService } from '../../Servicios/vuelo.service';

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

  }

  guardar() {
    // Constante del metodo = valor del html
    const aeropuertoOrigenId = this.aeropuertoOrigenId.nativeElement.value;
    const aeropuertoDestinoId = this.aeropuertoDestinoId.nativeElement.value;
    const avionId = this.avionId.nativeElement.value;
    const pilotoId = this.pilotoId.nativeElement.value;
    const estatusId = this.estatusId.nativeElement.value;
    const nombre = "Prueba";
    const fechaSalida = this.fechaSalida.nativeElement.value;
    const fechaLlegadaEstimada = this.fechaLlegadaEstimada.nativeElement.value;
    const fechaLlegadaReal = this.fechaLlegadaReal.nativeElement.value;
    const horasVuelo = 0.0;
    // const disponibilidad = this.disponibilidad;

    this.service.InsertarVuelo(aeropuertoOrigenId, aeropuertoDestinoId, avionId, pilotoId, estatusId, nombre, fechaSalida, fechaLlegadaEstimada, fechaLlegadaReal, horasVuelo);
  }

  // newDate(partes) {
  //   var date = new Date(0);
  //   date.setHours(partes[0]);
  //   date.setMinutes(partes[1]);
  //   return date;
  // }

  // prefijo(num) {
  //   return num < 10 ? ("0" + num) : num;
  // }
}
