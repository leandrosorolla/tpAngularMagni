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
    url="http://localhost:9000/api/v1/instrumentoApiWeb/";
   //lee todos los productos  
  getFromDataBase(){
    return this.http.get(this.url).pipe(
      map( instruData => instruData));
  }

  //busca un producto por el id
  getBaseDatosXId(idx:string){
    return this.http.get(this.url + idx).pipe(
      map( instruEncontrado => instruEncontrado));
  }

  //busca los producto por un terminode busqueda
  getBusquedaFromDataBase(termino:string){
    return this.http.get("http://localhost:8081/WebAppServer/RestoServlet?action=busqueda&termino=" + termino).pipe(
      map( instruSearch => instruSearch));
  }

  // Url:string = "http://localhost:8081/WebAppServer/RestoServlet";
  new( instruNuevo: Instrumento) {
    return this.http.post<Instrumento>( this.url, instruNuevo).pipe(map( nuevoInstru => {
            console.log(instruNuevo.instrumento);
            return nuevoInstru;
          }));
  }



   update( instruUpdate: Instrumento) {
      return this.http.put<Instrumento>( this.url+instruUpdate.id, instruUpdate).pipe(map( res => {
              console.log(res.instrumento);
              return res;
            }));
    }

    delete(id: string){
      return this.http.delete( this.url+id)
            .pipe(
            map( res => {
              console.log(res);
              return res;}));
            }
           
}
