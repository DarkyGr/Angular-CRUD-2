import { Component, OnInit } from '@angular/core';
import { PilotoService } from '../../Servicios/piloto.service';

@Component({
  selector: 'app-listar-pilotos',
  templateUrl: './listar-pilotos.component.html',
  styleUrls: ['./listar-pilotos.component.css']
})
export class ListarPilotosComponent implements OnInit {

  get listaPilotos(){
    return this.service.listaPilotos;
  }
  
  constructor(private service : PilotoService){
    service.GetPilotos();
  }

  ngOnInit(): void {
    
  }
}
