import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { CreacionComponent } from './creacion/creacion.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'listado', component:ListadoComponent},
  {path:'creacion', component:CreacionComponent},
  {path:'eliminar/:id', component:EliminarComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'buscar', component:BuscarComponent},
  {path:'**', component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
