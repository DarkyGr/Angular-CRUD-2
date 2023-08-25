import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AeropuertoService } from '../../Servicios/aeropuerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-aeropuerto',
  templateUrl: './editar-aeropuerto.component.html',
  styleUrls: ['./editar-aeropuerto.component.css']
})
export class EditarAeropuertoComponent {

  private id_param: any;
  private AeropuertoId: number = 0;

  @ViewChild("nombre")
  private nombre!: ElementRef

  @ViewChild("municipio")
  private municipio!: ElementRef

  @ViewChild("estado")
  private estado!: ElementRef

  @ViewChild("pais")
  private pais!: ElementRef

  editar() {
    // Constante del metodo = valor del html
    const id = this.AeropuertoId;
    const nombre = this.nombre.nativeElement.value;
    const municipio = this.municipio.nativeElement.value;
    const estado = this.estado.nativeElement.value;
    const pais = this.pais.nativeElement.value;
    // const disponibilidad = this.disponibilidad;

    if (nombre != "") {
      this.service.EditarAeropuerto(id, nombre, municipio, estado, pais);
    }else{
      Swal.fire({
        title: 'Advertencia!',
        text: 'El campo Nombre no puede quedar vacío.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
  }

  constructor(private route: ActivatedRoute, private service: AeropuertoService) {
    this.id_param = this.route.params.subscribe(params => {
      this.AeropuertoId = + params['id'];
      // console.log(this.AeropuertoId)
      this.service.AeropuertoById(this.AeropuertoId);
    })
  }

  get dataAeropuerto() {
    return this.service.aeropuerto
  }
}
