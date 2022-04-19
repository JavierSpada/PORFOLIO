import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ButtonComponent } from './components/button/button.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    SeccionComponent,
    ButtonComponent,
    HabilidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
