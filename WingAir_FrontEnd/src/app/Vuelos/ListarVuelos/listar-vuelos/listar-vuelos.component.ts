import { Component } from '@angular/core';
import { VueloService } from '../../Servicios/vuelo.service';

@Component({
  selector: 'app-listar-vuelos',
  templateUrl: './listar-vuelos.component.html',
  styleUrls: ['./listar-vuelos.component.css']
})
export class ListarVuelosComponent {
  get listaVuelos(){
    return this.service.listaVuelos;
  }
  
  constructor(private service : VueloService){
    service.GetVuelos();
  }

  ngOnInit(): void {
    
  }
}
