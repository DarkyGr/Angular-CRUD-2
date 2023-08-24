import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AeropuertoService } from '../../Servicios/aeropuerto.service';

@Component({
  selector: 'app-detalles-aeropuerto',
  templateUrl: './detalles-aeropuerto.component.html',
  styleUrls: ['./detalles-aeropuerto.component.css']
})
export class DetallesAeropuertoComponent {
  private id_param: any;
  private AeropuertoId: number = 0;

  constructor(private route: ActivatedRoute, private service:AeropuertoService){
    this.id_param = this.route.params.subscribe(params =>{
      this.AeropuertoId =+ params['id'];
      // console.log(this.ChoferId)
      this.service.AeropuertoById(this.AeropuertoId);      
    })
  }

  get dataAeropuerto(){
    return this.service.aeropuerto
  }

  eliminar(){
    const id = this.AeropuertoId;
    this.service.EliminarAeropuerto(id);
  }
}
