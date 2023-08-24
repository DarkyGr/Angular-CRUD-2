import { Component, OnInit } from '@angular/core';
import { AeropuertoService } from '../../Servicios/aeropuerto.service';

@Component({
  selector: 'app-listar-aeropuertos',
  templateUrl: './listar-aeropuertos.component.html',
  styleUrls: ['./listar-aeropuertos.component.css']
})
export class ListarAeropuertosComponent implements OnInit {

  get listaAeropuertos(){
    return this.service.listaAeropuertos;
  }
  
  constructor(private service : AeropuertoService){
    service.GetAeropuertos();
  }

  ngOnInit(): void {
    
  }
}
