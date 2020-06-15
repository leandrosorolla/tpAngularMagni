import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../service/service.service';
import { Instrumento } from './../../entidades/instrumento';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
instrumento: Instrumento={
  id:"0",
  instrumento:"",
  imagen:"",
  precio:"",
  marca:"",
  modelo:"",
  costoEnvio:"",
  cantidadVendida:"",
  descripcion:""
}
new = false;
id:string;
resultadoOperacion="";
  constructor(private service : ServiceService, private router:Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params
    .subscribe(
      parametros => {
        this.id = parametros['id'];
        if(this.id != "nuevo"){
          service.getBaseDatosXId(this.id)
          .subscribe(instruEncontrado => this.instrumento = instruEncontrado as Instrumento );
        }else{
          console.log("ES NUEVO");
        }
      }
    );
   }

  ngOnInit(): void {
  }
  save() {
    if(!this.validarSiNumero(this.instrumento.precio)){
      this.resultadoOperacion = ("Ingrese un numero para el precio.");
      return;
    }
    if ( this.id === 'nuevo') {
      console.log('nuevo');
      this.service.new(this.instrumento)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }
        },
        error => console.error(error));
    } else {
      console.log(`Update ${ this.id }`);
      this.service.update(this.instrumento)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
            console.log(data);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }         
        },
        error => console.error(error));
    }
  }
  addNew(formu: NgForm) {
    this.router.navigate(['/admin', 'nuevo']);
    formu.reset({
      id:"0",
      nombre:"",
      precio:"",
      rubro:"",
      imagenPath:""
    });
  }

  validarSiNumero(numero:string):boolean{
    if(!/^([0-9])*$/.test(numero)) 
        return false;
    return true;
    
  }

}
