import { Instrumento } from './../entidades/instrumento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public instruData: Instrumento[];
  public instruEncontrado:Instrumento;

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado");
    
   }
   //lee todos los productos  
  getFromDataBase(){
    return this.http.get("http://localhost:8081/WebAppServer/RestoServlet?action=listar").pipe(
      map( instruData => instruData));
  }

  //busca un producto por el id
  getBaseDatosXId(idx:string){
    return this.http.get("http://localhost:8081/WebAppServer/RestoServlet?action=buscar&idPlato=" + idx).pipe(
      map( instruEncontrado => instruEncontrado));
  }

  //busca los producto por un terminode busqueda
  getBusquedaFromDataBase(termino:string){
    return this.http.get("http://localhost:8081/WebAppServer/RestoServlet?action=busqueda&termino=" + termino).pipe(
      map( instruSearch => instruSearch));
  }

  Url:string = "http://localhost:8081/WebAppServer/RestoServlet";
  new( instruNuevo: Instrumento) {
    return this.http.post<Instrumento>( this.Url, null, {params: new HttpParams().set("action", "insertar").set("id", "0")
    .set("instrumento", instruNuevo.instrumento).set("imagenPath", instruNuevo.imagen).set("marca", instruNuevo.marca).set("modelo", instruNuevo.modelo).set("precio",instruNuevo.precio).set("costoEnvio",instruNuevo.costoEnvio).set("cantidadVendida",instruNuevo.cantidadVendida).set("descripcion",instruNuevo.descripcion)
    }).pipe(map( nuevoInstru => {
            console.log(instruNuevo.instrumento);
            return nuevoInstru;
          }));
  }



   update( instruUpdate: Instrumento) {
      return this.http.post<Instrumento>( this.Url, null, {params: new HttpParams().set("action", "actualizar").set("id", instruUpdate.id)
      .set("instrumento", instruUpdate.instrumento).set("imagenPath", instruUpdate.imagen).set("marca", instruUpdate.marca).set("modelo", instruUpdate.modelo).set("precio",instruUpdate.precio).set("costoEnvio",instruUpdate.costoEnvio).set("cantidadVendida",instruUpdate.cantidadVendida).set("descripcion",instruUpdate.descripcion)
    }).pipe(map( res => {
              console.log(res.instrumento);
              return res;
            }));
    }

    delete(id: string){
      return this.http.post( this.Url, null, {params: new HttpParams().set("action", "eliminar").set("id",id)})
            .pipe(
            map( res => {
              console.log(res);
              return res;}));
            }
           
}
