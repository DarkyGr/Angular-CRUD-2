import { Component, ElementRef, ViewChild } from '@angular/core';
import { PilotoService } from '../../Servicios/piloto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-piloto',
  templateUrl: './agregar-piloto.component.html',
  styleUrls: ['./agregar-piloto.component.css']
})
export class AgregarPilotoComponent {

  @ViewChild("nombre")
  private nombre!: ElementRef

  @ViewChild("sexo")
  private sexo!: ElementRef

  constructor(private service: PilotoService) {

  }

  guardar() {
    // Constante del metodo = valor del html
    const ultimo = this.listaPilotos.length - 1;
    const pilotoU = this.listaPilotos[ultimo];

    // Get el ultimo ID y asignar el codigo
    const ultimoId = pilotoU.PilotoId + 1;
    var codigo = this.codigoPiloto(ultimoId);

    // Constante del metodo = valor del html
    // const codigo = "Prueba";
    const nombre = this.nombre.nativeElement.value;
    const sexo = this.sexo.nativeElement.value;
    const horasVuelo = 0.0;
    // const disponibilidad = this.disponibilidad;

    if (nombre != "") {
      if (sexo == 'M' || sexo == "F") {
        this.service.InsertarPiloto(codigo, nombre, sexo, horasVuelo);
      }else{
        Swal.fire({
          title: 'Advertencia!',
          text: 'El campo Sexo no puede quedar vacío y solo acepta un carácter en mayúscula (M = Masculino) o (F = Femenino).',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }
    }else{
      Swal.fire({
        title: 'Advertencia!',
        text: 'El campo Nombre no puede quedar vacío.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
  }

  get listaPilotos() {
    this.service.GetPilotos;
    return this.service.listaPilotos;
  }

  codigoPiloto(ultimoId: number) {
    var codigo1 = "";

    if (ultimoId < 10) {
      codigo1 = "PA-" + "000" + ultimoId;
    } else if (ultimoId < 100) {
      codigo1 = "PA-" + "00" + ultimoId;
    } else if (ultimoId < 1000) {
      codigo1 = "PA-" + "0" + ultimoId;
    } else if (ultimoId < 10000) {
      codigo1 = "PA-" + ultimoId;
    }

    return codigo1;
  }
}
