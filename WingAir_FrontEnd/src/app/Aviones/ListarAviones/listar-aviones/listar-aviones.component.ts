import { Component, OnInit } from '@angular/core';
import { AvionService } from '../../Servicios/avion.service';

@Component({
  selector: 'app-listar-aviones',
  templateUrl: './listar-aviones.component.html',
  styleUrls: ['./listar-aviones.component.css']
})
export class ListarAvionesComponent implements OnInit{

  get listaAviones(){
    return this.service.listaAviones;
  }
  
  constructor(private service : AvionService){
    service.GetAviones();
  }

  ngOnInit(): void {
    
  }
}
