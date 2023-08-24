import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvionService } from '../../Servicios/avion.service';

@Component({
  selector: 'app-detalles-avion',
  templateUrl: './detalles-avion.component.html',
  styleUrls: ['./detalles-avion.component.css']
})
export class DetallesAvionComponent {
  private id_param: any;
  private AvionId: number = 0;

  constructor(private route: ActivatedRoute, private service: AvionService) {
    this.id_param = this.route.params.subscribe(params => {
      this.AvionId = + params['id'];
      // console.log(this.ChoferId)
      this.service.AvionById(this.AvionId);
    })
  }

  get dataAvion() {
    return this.service.avion
  }

  eliminar() {
    const id = this.AvionId;
    this.service.EliminarAvion(id);
  }
}
