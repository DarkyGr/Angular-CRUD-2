import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VueloService } from '../../Servicios/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-vuelo',
  templateUrl: './editar-vuelo.component.html',
  styleUrls: ['./editar-vuelo.component.css']
})
export class EditarVueloComponent {
  private id_param: any;
  private VueloId: number = 0;
  public listaNueva: any[];

  constructor(private route: ActivatedRoute, private service: VueloService, private router: Router){
    this.id_param = this.route.params.subscribe(params =>{
      this.VueloId =+ params['id'];
      // console.log(this.AvionId)
      this.service.VueloById(this.VueloId);      
    })

    this.listaNueva = []
    service.GetEstatus();
  }

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
    
    // Igual a finalizado se agregan las horas al piloto y avion
    if(estatusId == 3){
      for (let index = 0; index < this.listaAviones.length; index++) {        
        if(this.listaAviones[index].AvionId == avionId){
          this.listaAviones[index].HorasVuelo = horasVuelo;
        }
      }

      for (let index = 0; index < this.listaPilotos.length; index++) {        
        if(this.listaPilotos[index].PilotoId == pilotoId){
          this.listaPilotos[index].HorasVuelo = horasVuelo;
        }
      }
    }
    
    this.service.EditarVuelo(vueloId, aeropuertoOrigenId, aeropuertoDestinoId, avionId, pilotoId, estatusId, nombre, fechaSalida, fechaLlegadaEstimada, fechaLlegadaReal, horasVuelo);
    
  }  

  get dataVuelo(){
    return this.service.vuelo
  }

  get listaEstatus() {
    this.service.GetEstatus;
    
    for (let index = 0; index < this.service.listaEstatus.length; index++) {
      if((this.service.listaEstatus[index]).EstatusId != 0){
        this.listaNueva[index-1] = this.service.listaEstatus[index];
      }
    }

    return this.listaNueva;
  }

  get listaAviones(){
    this.service.GetAviones();
    return this.service.listaAviones;
  }

  get listaPilotos(){
    this.service.GetPilotos();
    return this.service.listaPilotos;
  }
}
