import { ServiceService } from './../../service/service.service';
import { Instrumento } from './../../entidades/instrumento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {

  instArr: Instrumento[] = [];
  loading= true;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getFromDataBase().subscribe(data=>{
      for(let instru in data){
        this.instArr.push(data[instru])
        console.log(this.instArr);
        
      }
      this.loading=false;
    })
    
  }

  public verInstr(idx: string){
    console.log('ID instrumento ' + idx);
    this.router.navigate(['/detalleInstrumento', idx]);

  }

}
