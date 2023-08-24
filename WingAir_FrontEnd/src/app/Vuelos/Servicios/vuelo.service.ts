import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  public listaVuelos: any[];
  public vuelo: any;

  constructor(private http: HttpClient, private router: Router) {
    this.listaVuelos = []
    this.vuelo = {}
  }

  // Metodo de obetenr la lista
  GetVuelos(): void {
    // Trae una respuesta de cualquier cosa  
    this.http.get("http://localhost:55323/api/VuelosAPI/GetList").subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.listaVuelos = respuesta
    })
  }

  VueloById(id: number) {
    this.http.get("http://localhost:55323/api/VuelosAPI/GetById/" + id).subscribe((respuesta: any) => {
      // console.log(respuesta);
      this.vuelo = respuesta;
    })
  }

  EliminarVuelo(id: number) {
    this.http.delete("http://localhost:55323/api/VuelosAPI/Delete/" + id).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se eliminó correctamente el vuelo',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarVuelos'])
      }
    })
  }

  InsertarVuelo(aeropuertoOrigenId: number, aeropuertoDestinoId: number, avionId: number, pilotoId: number, estatusId: number,
    nombre: string, fechaSalida: string, fechaLlegadaEstimada: string, fechaLlegadaReal: string, horasVuelo: number) {
    this.http.post("http://localhost:55323/api/VuelosAPI/Insert", {
      "AeropuertoOrigenId": aeropuertoOrigenId,
      "AeropuertoDestinoId": aeropuertoDestinoId,
      "AvionId": avionId,
      "PilotoId": pilotoId,
      "EstatusId": estatusId,
      "Nombre": nombre,
      "FechaSalida": fechaSalida,
      "FechaLlegadaEstimada": fechaLlegadaEstimada,
      "FechaLlegadaReal": fechaLlegadaReal,
      "HorasVuelo": horasVuelo
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se agregó correctamente el vuelo',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarVuelos'])
      }
    })
  }

  EditarVuelo(id: number, aeropuertoOrigenId: number, aeropuertoDestinoId: number, avionId: number, pilotoId: number, estatusId: number,
    nombre: string, fechaSalida: string, fechaLlegadaEstimada: string, fechaLlegadaReal: string, horasVuelo: number) {
    this.http.post("http://localhost:55323/api/VuelosAPI/Update", {
      "VueloId": id,
      "AeropuertoOrigenId": aeropuertoOrigenId,
      "AeropuertoDestinoId": aeropuertoDestinoId,
      "AvionId": avionId,
      "PilotoId": pilotoId,
      "EstatusId": estatusId,
      "Nombre": nombre,
      "FechaSalida": fechaSalida,
      "FechaLlegadaEstimada": fechaLlegadaEstimada,
      "FechaLlegadaReal": fechaLlegadaReal,
      "HorasVuelo": horasVuelo
    }).subscribe((respuesta: any) => console.log(respuesta));

    // Creamos alert y cuando se de OK se redirecciona
    Swal.fire({
      title: 'Correcto!',
      text: 'Se actualizó correctamente el vuelo',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/ListarVuelos'])
      }
    })
  }
}
