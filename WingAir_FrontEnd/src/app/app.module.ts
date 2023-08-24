import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAeropuertosComponent } from './Aeropuertos/ListarAeropuertos/listar-aeropuertos/listar-aeropuertos.component';
import { EditarAeropuertoComponent } from './Aeropuertos/EditarAeropuerto/editar-aeropuerto/editar-aeropuerto.component';
import { AgregarAeropuertoComponent } from './Aeropuertos/AgregarAeropuerto/agregar-aeropuerto/agregar-aeropuerto.component';
import { DetallesAeropuertoComponent } from './Aeropuertos/DetallesAeropuerto/detalles-aeropuerto/detalles-aeropuerto.component';
import { ListarAvionesComponent } from './Aviones/ListarAviones/listar-aviones/listar-aviones.component';
import { DetallesAvionComponent } from './Aviones/DetallesAvion/detalles-avion/detalles-avion.component';
import { AgregarAvionComponent } from './Aviones/AgregarAvion/agregar-avion/agregar-avion.component';
import { EditarAvionComponent } from './Aviones/EditarAvion/editar-avion/editar-avion.component';
import { ListarPilotosComponent } from './Pilotos/ListarPilotos/listar-pilotos/listar-pilotos.component';
import { AgregarPilotoComponent } from './Pilotos/AgregarPiloto/agregar-piloto/agregar-piloto.component';
import { DetallesPilotoComponent } from './Pilotos/DetallesPiloto/detalles-piloto/detalles-piloto.component';
import { EditarPilotoComponent } from './Pilotos/EditarPiloto/editar-piloto/editar-piloto.component';
import { ListarVuelosComponent } from './Vuelos/ListarVuelos/listar-vuelos/listar-vuelos.component';
import { DetallesVueloComponent } from './Vuelos/DetallesVuelo/detalles-vuelo/detalles-vuelo.component';
import { AgregarVueloComponent } from './Vuelos/AgregarVuelo/agregar-vuelo/agregar-vuelo.component';
import { EditarVueloComponent } from './Vuelos/EditarVuelo/editar-vuelo/editar-vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAeropuertosComponent,
    EditarAeropuertoComponent,
    AgregarAeropuertoComponent,
    DetallesAeropuertoComponent,
    ListarAvionesComponent,
    DetallesAvionComponent,
    AgregarAvionComponent,
    EditarAvionComponent,
    ListarPilotosComponent,
    AgregarPilotoComponent,
    DetallesPilotoComponent,
    EditarPilotoComponent,
    ListarVuelosComponent,
    DetallesVueloComponent,
    AgregarVueloComponent,
    EditarVueloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
