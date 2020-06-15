 import { ServiceService } from './../../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  intrumentoBusqueda:any [];
  termino:string;
  constructor(private activatedRoute: ActivatedRoute, private service: ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.service.getBusquedaFromDataBase(this.termino).subscribe(data=>{
        for(let instru in data ){
          this.intrumentoBusqueda.push(data[instru]);
        }
      });
      // this.intrumentoBusqueda = this.service.buscarIntrumento(params['termino']);
    });

  }
  public verInstrumento(idx: string){
    this.router.navigate(['/detalleInstrumento', idx]);
  }

}
