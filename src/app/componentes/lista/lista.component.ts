import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';
import { Instrumento } from './../../entidades/instrumento';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  instrumento: Instrumento[]=[];
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getFromDataBase()
    .subscribe(data => {
      console.log(data);
      for(let inst in data){
        console.log(data[inst]);
        this.instrumento.push(data[inst]);
      }
      // this.loading = false;
    });
  }

  delete(id:string){
    var opcion = confirm("Esta seguro que desea eliminar el plato?");
    if (opcion == true) {
      this.service.delete(id)
      .subscribe(data => {
        console.log(data);
        location.reload();  
      });
    }
    
  }
}
