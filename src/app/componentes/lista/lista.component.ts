import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
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
