import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PilotoService } from '../../Servicios/piloto.service';

@Component({
  selector: 'app-detalles-piloto',
  templateUrl: './detalles-piloto.component.html',
  styleUrls: ['./detalles-piloto.component.css']
})
export class DetallesPilotoComponent {
  private id_param: any;
  private PilotoId: number = 0;

  constructor(private route: ActivatedRoute, private service: PilotoService) {
    this.id_param = this.route.params.subscribe(params => {
      this.PilotoId = + params['id'];
      // console.log(this.ChoferId)
      this.service.PilotoById(this.PilotoId);
    })
  }

  get dataPiloto() {
    return this.service.piloto
  }

  eliminar() {
    const id = this.PilotoId;
    this.service.EliminarPiloto(id);
  }
}
