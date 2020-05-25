import { ServiceService } from './../../servicio/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {
   intrumento: any;
  constructor(private service: ServiceService , private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      console.log('id actual');

      this.intrumento = this.service.getPlatoXId(params.id);

    });
   }

  ngOnInit(): void {
  }

}
