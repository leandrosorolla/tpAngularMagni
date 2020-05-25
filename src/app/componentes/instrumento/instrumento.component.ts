import { ServiceService } from './../../servicio/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {

  instArr: any[] = [];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.instArr = this.service.getInstrumentos();
    console.log(this.instArr);
  }

  public verInstr(idx: string){
    console.log('ID instrumento ' + idx);
    this.router.navigate(['/detalleInstrumento', idx]);

  }

}
