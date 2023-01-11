import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
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
    path: 'equipo',
    component: SobremiComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
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
