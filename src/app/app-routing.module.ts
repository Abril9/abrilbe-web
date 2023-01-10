import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobremiComponent } from './sobremi/sobremi.component';


const routes: Routes = [

  {
    path: 'bienvenido',
    component: InicioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'sobremi',
    component: SobremiComponent,
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
  },
  {
    path: '**',
    redirectTo: 'bienvenido',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
