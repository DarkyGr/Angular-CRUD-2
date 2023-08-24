import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  public listaAeropuertos: any[];
  public aeropuerto: any;

  constructor(private http: HttpClient, private router: Router) {
    this.listaAeropuertos = []
    this.aeropuerto = {}
  }

  // Metodo de obetenr la lista
  GetAeropuertos(): void {
    // Trae una respuesta de cualquier cosa  
    this.http.get("http://localhost:55323/api/AeropuertosAPI/GetList").subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.listaAeropuertos = respuesta
    })
  }

  AeropuertoById(id: number) {
    this.http.get("http://localhost:55323/api/AeropuertosAPI/GetById/" + id).subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.aeropuerto = respuesta;
    })
  }

  EliminarAeropuerto(id: number) {
    this.http.delete("http://localhost:55323/api/AeropuertosAPI/Delete/" + id).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se eliminó correctamente el aeropuerto',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarAeropuertos'])
      }
    })
  }

  InsertarAeropuerto(nombre: string, municipio: string, estado: string, pais: string) {
    this.http.post("http://localhost:55323/api/AeropuertosAPI/Insert", {
      "Nombre": nombre,
      "Municipio": municipio,
      "Estado": estado,
      "Pais": pais
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se agregó correctamente el aeropuerto',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarAeropuertos'])
      }
    })
  }

  EditarAeropuerto(id: number, nombre: string, municipio: string, estado: string, pais: string) {
    this.http.post("http://localhost:55323/api/AeropuertosAPI/Update", {
      "AeropuertoId": id,
      "Nombre": nombre,
      "Municipio": municipio,
      "Estado": estado,
      "Pais": pais
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se actualizó correctamente el aeropuerto',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarAeropuertos'])
      }
    })    
  }
}
