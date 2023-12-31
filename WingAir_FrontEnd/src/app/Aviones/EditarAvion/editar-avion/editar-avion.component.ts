import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvionService } from '../../Servicios/avion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-avion',
  templateUrl: './editar-avion.component.html',
  styleUrls: ['./editar-avion.component.css']
})
export class EditarAvionComponent {
  private id_param: any;
  private AvionId: number = 0;

  @ViewChild("capacidadPasajeros")
  private capacidadPasajeros!: ElementRef

  editar() {
    // Constante del metodo = valor del html
    const id = this.AvionId;
    const tipoAvion = this.dataAvion.TipoId;
    const codigo = this.dataAvion.Codigo;
    const horasVuelo = this.dataAvion.HorasVuelo;
    const capacidadPasajeros = this.capacidadPasajeros.nativeElement.value;
    // const disponibilidad = this.disponibilidad;

    if (capacidadPasajeros != "" && capacidadPasajeros > 0) {
      this.service.EditarAvion(id, tipoAvion, codigo, horasVuelo, capacidadPasajeros);
    } else {
      Swal.fire({
        title: 'Advertencia!',
        text: 'El campo Capacidad de pasajeros no puede quedar vacío y debe ser mayor a 0.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
  }

  constructor(private route: ActivatedRoute, private service: AvionService) {
    this.id_param = this.route.params.subscribe(params => {
      this.AvionId = + params['id'];
      // console.log(this.AvionId)
      this.service.AvionById(this.AvionId);
    })
  }

  get dataAvion() {
    return this.service.avion
  }
}
