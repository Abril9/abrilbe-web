import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EntradaComponent } from './entrada/entrada.component';
import { BannerLigthComponent } from './banner-ligth/banner-ligth.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    FooterComponent,
    ProyectosComponent,
    SobremiComponent,
    ContactoComponent,
    EntradaComponent,
    BannerLigthComponent,
    TecnologiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
