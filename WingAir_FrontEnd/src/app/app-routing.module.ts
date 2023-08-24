import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAeropuertosComponent } from './Aeropuertos/ListarAeropuertos/listar-aeropuertos/listar-aeropuertos.component';
import { AgregarAeropuertoComponent } from './Aeropuertos/AgregarAeropuerto/agregar-aeropuerto/agregar-aeropuerto.component';
import { DetallesAeropuertoComponent } from './Aeropuertos/DetallesAeropuerto/detalles-aeropuerto/detalles-aeropuerto.component';
import { EditarAeropuertoComponent } from './Aeropuertos/EditarAeropuerto/editar-aeropuerto/editar-aeropuerto.component';
import { ListarAvionesComponent } from './Aviones/ListarAviones/listar-aviones/listar-aviones.component';
import { AgregarAvionComponent } from './Aviones/AgregarAvion/agregar-avion/agregar-avion.component';
import { EditarAvionComponent } from './Aviones/EditarAvion/editar-avion/editar-avion.component';
import { DetallesAvionComponent } from './Aviones/DetallesAvion/detalles-avion/detalles-avion.component';
import { ListarPilotosComponent } from './Pilotos/ListarPilotos/listar-pilotos/listar-pilotos.component';
import { AgregarPilotoComponent } from './Pilotos/AgregarPiloto/agregar-piloto/agregar-piloto.component';
import { DetallesPilotoComponent } from './Pilotos/DetallesPiloto/detalles-piloto/detalles-piloto.component';
import { EditarPilotoComponent } from './Pilotos/EditarPiloto/editar-piloto/editar-piloto.component';
import { ListarVuelosComponent } from './Vuelos/ListarVuelos/listar-vuelos/listar-vuelos.component';
import { AgregarVueloComponent } from './Vuelos/AgregarVuelo/agregar-vuelo/agregar-vuelo.component';
import { DetallesVueloComponent } from './Vuelos/DetallesVuelo/detalles-vuelo/detalles-vuelo.component';
import { EditarVueloComponent } from './Vuelos/EditarVuelo/editar-vuelo/editar-vuelo.component';

const routes: Routes = [
  { path: 'ListarAeropuertos', component: ListarAeropuertosComponent},
  { path: 'AgregarAeropuerto', component: AgregarAeropuertoComponent},
  { path: 'DetallesAeropuerto/:id', component: DetallesAeropuertoComponent},
  { path: 'EditarAeropuerto/:id', component: EditarAeropuertoComponent},
  { path: 'ListarAviones', component: ListarAvionesComponent},
  { path: 'AgregarAvion', component: AgregarAvionComponent},
  { path: 'DetallesAvion/:id', component: DetallesAvionComponent},
  { path: 'EditarAvion/:id', component: EditarAvionComponent},
  { path: 'ListarPilotos', component: ListarPilotosComponent},
  { path: 'AgregarPiloto', component: AgregarPilotoComponent},
  { path: 'DetallesPiloto/:id', component: DetallesPilotoComponent},
  { path: 'EditarPiloto/:id', component: EditarPilotoComponent},
  { path: 'ListarVuelos', component: ListarVuelosComponent},
  { path: 'AgregarVuelo', component: AgregarVueloComponent},
  { path: 'DetallesVuelo/:id', component: DetallesVueloComponent},
  { path: 'EditarVuelo/:id', component: EditarVueloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
