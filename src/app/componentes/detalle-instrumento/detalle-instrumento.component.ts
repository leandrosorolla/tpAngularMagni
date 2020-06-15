import { Instrumento } from './../../entidades/instrumento';
import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {
   intrumento: Instrumento;
  constructor(private service: ServiceService , private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.service.getBaseDatosXId(params['id']).subscribe(encontrado=>{
        this.intrumento= encontrado as Instrumento;
      })
      

    });
   }

  ngOnInit(): void {
  }

}
