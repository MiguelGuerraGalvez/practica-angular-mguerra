import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { CreacionComponent } from './creacion/creacion.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'listado', component:ListadoComponent},
  {path:'creacion', component:CreacionComponent},
  {path:'**', component:Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
