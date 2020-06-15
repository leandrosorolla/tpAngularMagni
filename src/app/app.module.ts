import { InstrumentoComponent } from './componentes/instrumento/instrumento.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { DetalleInstrumentoComponent } from './componentes/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { CommonModule } from '@angular/common';
import { ItemIntrumentoComponent } from './componentes/item-intrumento/item-intrumento.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './componentes/lista/lista.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

  @NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DetalleInstrumentoComponent,
    BuscadorComponent,
    InstrumentoComponent,
    ItemIntrumentoComponent,
    ListaComponent,
    AdminComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule, NgbAlertModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
