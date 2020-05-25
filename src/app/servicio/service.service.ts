import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  instrumentosFile: any = (data as any).default;
  constructor() {
    console.log('Carga de datos');
    console.log(this.instrumentosFile);

   }
   public getInstrumentos(): any[]{
     return  this.instrumentosFile.instrumentos;
     console.log(this.instrumentosFile.instrumentos );

   }
   public getPlatoXId(idx: string): any{
    for (const instrumento of this.instrumentosFile.instrumentos){
        if (instrumento.id === idx){
          return instrumento;
        }
    }
   }
   public buscarIntrumento(termino: string): any{
    const intrumentoArr: any[] = [];
    termino = termino.toLowerCase();
    for(let intr of this.instrumentosFile.instrumentos){
      let nombre = intr.instrumento.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        intrumentoArr.push(intr);
      }
    }
    return intrumentoArr;
   }
}
