import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module.ts/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ButtonComponent } from './components/button/button.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PorfolioService } from './service/porfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    SeccionComponent,
    ButtonComponent,
    HabilidadComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
