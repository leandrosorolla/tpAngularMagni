import { AdminComponent } from './componentes/admin/admin.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { DetalleInstrumentoComponent } from './componentes/detalle-instrumento/detalle-instrumento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { InstrumentoComponent } from './componentes/instrumento/instrumento.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'instrumentos', component: InstrumentoComponent},
  {path:'detalleInstrumento/:id', component:DetalleInstrumentoComponent},
  {path: 'buscar/:termino', component:BuscadorComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'admin/:id', component:AdminComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
