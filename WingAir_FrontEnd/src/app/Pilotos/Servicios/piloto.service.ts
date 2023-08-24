import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  public listaPilotos: any[];
  public piloto: any;

  constructor(private http: HttpClient, private router: Router) {
    this.listaPilotos = []
    this.piloto = {}
  }

  // Metodo de obetenr la lista
  GetPilotos(): void {
    // Trae una respuesta de cualquier cosa  
    this.http.get("http://localhost:55323/api/PilotosAPI/GetList").subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.listaPilotos = respuesta
    })
  }

  PilotoById(id: number) {
    this.http.get("http://localhost:55323/api/PilotosAPI/GetById/" + id).subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.piloto = respuesta;
    })
  }

  EliminarPiloto(id: number) {
    this.http.delete("http://localhost:55323/api/PilotosAPI/Delete/" + id).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se eliminó correctamente el piloto',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarPilotos'])
      }
    })
  }

  InsertarPiloto(codigo: string, nombre: string, sexo: string, horasVuelo: number) {
    this.http.post("http://localhost:55323/api/PilotosAPI/Insert", {
      "Codigo": codigo,
      "Nombre": nombre,
      "Sexo": sexo,
      "HorasVuelo": horasVuelo
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se agregó correctamente el piloto',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarPilotos'])
      }
    })
  }

  EditarPiloto(id: number, codigo: string, nombre: string, sexo: string, horasVuelo: number) {
    this.http.post("http://localhost:55323/api/PilotosAPI/Update", {
      "PilotoId": id,
      "Codigo": codigo,
      "Nombre": nombre,
      "Sexo": sexo,
      "HorasVuelo": horasVuelo
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se actualizó correctamente el piloto',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarPilotos'])
      }
    })
  }
}
