import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  public listaAviones: any[];
  public listaTiposAviones: any[];
  public avion: any;

  constructor(private http: HttpClient, private router: Router) {
    this.listaAviones = []
    this.listaTiposAviones = []
    this.avion = {}
  }

  // Metodo de obetenr la lista
  GetAviones(): void {
    // Trae una respuesta de cualquier cosa  
    this.http.get("http://localhost:55323/api/AvionesAPI/GetList").subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.listaAviones = respuesta
    })
  }

  GetTipoAviones(): void {
    this.http.get("http://localhost:55323/api/TiposAvionesAPI/GetList").subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.listaTiposAviones = respuesta
    })
  }

  AvionById(id: number) {
    this.http.get("http://localhost:55323/api/AvionesAPI/GetById/" + id).subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.avion = respuesta;
    })
  }

  EliminarAvion(id: number) {
    this.http.delete("http://localhost:55323/api/AvionesAPI/Delete/" + id).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se eliminó correctamente el avión',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarAviones'])
      }
    })
  }

  InsertarAvion(tipoId: number, codigo: string, horasVuelo: number, capacidadPasajeros: number) {
    this.http.post("http://localhost:55323/api/AvionesAPI/Insert", {
      "TipoId": tipoId,
      "Codigo": codigo,
      "HorasVuelo": horasVuelo,
      "CapacidadPasajeros": capacidadPasajeros
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se agregó correctamente el avión',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarAviones'])
      }
    })
  }

  EditarAvion(id: number, tipoId: number, codigo: string, horasVuelo: number, capacidadPasajeros: number) {
    this.http.post("http://localhost:55323/api/AvionesAPI/Update", {
      "AvionId": id,
      "TipoId": tipoId,
      "Codigo": codigo,
      "HorasVuelo": horasVuelo,
      "CapacidadPasajeros": capacidadPasajeros
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se actualizó correctamente el avión',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarAviones'])
      }
    })
  }
}
