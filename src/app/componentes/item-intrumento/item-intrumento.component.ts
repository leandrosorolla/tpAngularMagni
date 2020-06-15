import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Instrumento } from '../../entidades/instrumento';

@Component({
  selector: 'app-item-intrumento',
  templateUrl: './item-intrumento.component.html',
  styleUrls: ['./item-intrumento.component.css']
})
export class ItemIntrumentoComponent implements OnInit {
  @Input() intumAux:Instrumento;
  @Input() index:number;

  @Output() instrumentoSeleccionado: EventEmitter<number>;
  constructor(private router:Router) {
    this.instrumentoSeleccionado=  new EventEmitter();
   }

  ngOnInit(): void {
  }
  public verInstrumento(){
    console.log(this.index);
    this.instrumentoSeleccionado.emit(this.index);
    
  }

}
