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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DetalleInstrumentoComponent,
    BuscadorComponent,
    InstrumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
