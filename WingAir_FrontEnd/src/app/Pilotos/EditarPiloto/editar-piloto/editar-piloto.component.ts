import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PilotoService } from '../../Servicios/piloto.service';

@Component({
  selector: 'app-editar-piloto',
  templateUrl: './editar-piloto.component.html',
  styleUrls: ['./editar-piloto.component.css']
})
export class EditarPilotoComponent {
  private id_param: any;
  private PilotoId: number = 0;

  @ViewChild("nombre")
  private nombre!: ElementRef
  
  @ViewChild("sexo")
  private sexo!: ElementRef

  editar(){
    // Constante del metodo = valor del html
    const id = this.PilotoId;
    const codigo = this.dataPiloto.Codigo;
    const nombre = this.nombre.nativeElement.value;
    const sexo = this.sexo.nativeElement.value;
    const horasVuelo = 0.0;
    // const disponibilidad = this.disponibilidad;

    this.service.EditarPiloto(id, codigo, nombre, sexo, horasVuelo);
  }

  constructor(private route: ActivatedRoute, private service: PilotoService){
    this.id_param = this.route.params.subscribe(params =>{
      this.PilotoId =+ params['id'];
      // console.log(this.AvionId)
      this.service.PilotoById(this.PilotoId);      
    })
  }

  get dataPiloto(){
    return this.service.piloto
  }
}
