import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VueloService } from '../../Servicios/vuelo.service';

@Component({
  selector: 'app-detalles-vuelo',
  templateUrl: './detalles-vuelo.component.html',
  styleUrls: ['./detalles-vuelo.component.css']
})
export class DetallesVueloComponent {
  private id_param: any;
  private VueloId: number = 0;

  constructor(private route: ActivatedRoute, private service: VueloService) {
    this.id_param = this.route.params.subscribe(params => {
      this.VueloId = + params['id'];
      // console.log(this.ChoferId)
      this.service.VueloById(this.VueloId);
    })
  }

  get dataVuelo() {
    return this.service.vuelo
  }

  eliminar() {
    const id = this.VueloId;
    this.service.EliminarVuelo(id);
  }
}
