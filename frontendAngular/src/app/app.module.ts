import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ButtonComponent } from './components/button/button.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    SeccionComponent,
    ButtonComponent,
    HabilidadComponent,
    ProyectosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
