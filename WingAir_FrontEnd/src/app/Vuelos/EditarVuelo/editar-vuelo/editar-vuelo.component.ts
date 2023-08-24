import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VueloService } from '../../Servicios/vuelo.service';

@Component({
  selector: 'app-editar-vuelo',
  templateUrl: './editar-vuelo.component.html',
  styleUrls: ['./editar-vuelo.component.css']
})
export class EditarVueloComponent {
  private id_param: any;
  private VueloId: number = 0;

  // @ViewChild("aeropuertoOrigenId")
  // private aeropuertoOrigenId!: ElementRef

  // @ViewChild("aeropuertoDestinoId")
  // private aeropuertoDestinoId!: ElementRef

  // @ViewChild("avionId")
  // private avionId!: ElementRef

  // @ViewChild("pilotoId")
  // private pilotoId!: ElementRef

  @ViewChild("estatusId")
  private estatusId!: ElementRef

  // @ViewChild("fechaSalida")
  // private fechaSalida!: ElementRef

  // @ViewChild("fechaLlegadaEstimada")
  // private fechaLlegadaEstimada!: ElementRef

  // @ViewChild("fechaLlegadaReal")
  // private fechaLlegadaReal!: ElementRef

  editar() {
    // Constante del metodo = valor del html
    const vueloId = this.VueloId;
    const aeropuertoOrigenId = this.dataVuelo.AeropuertoOrigenId;
    const aeropuertoDestinoId = this.dataVuelo.AeropuertoDestinoId;
    const avionId = this.dataVuelo.AvionId;
    const pilotoId = this.dataVuelo.PilotoId;
    const estatusId = this.estatusId.nativeElement.value;
    const nombre = this.dataVuelo.Nombre;
    const fechaSalida = this.dataVuelo.FechaSalida;
    const fechaLlegadaEstimada = this.dataVuelo.FechaLlegadaEstimada;
    const fechaLlegadaReal = this.dataVuelo.FechaLlegadaReal;
    const horasVuelo = this.dataVuelo.HorasVuelo;
    // const disponibilidad = this.disponibilidad;

    this.service.EditarVuelo(vueloId, aeropuertoOrigenId, aeropuertoDestinoId, avionId, pilotoId, estatusId, nombre, fechaSalida, fechaLlegadaEstimada, fechaLlegadaReal, horasVuelo);
  }

  constructor(private route: ActivatedRoute, private service: VueloService){
    this.id_param = this.route.params.subscribe(params =>{
      this.VueloId =+ params['id'];
      // console.log(this.AvionId)
      this.service.VueloById(this.VueloId);      
    })
  }

  get dataVuelo(){
    return this.service.vuelo
  }
}
