import { Component, OnInit } from '@angular/core';
import { ItemElement } from './components/ItemElement';
import { ItemHabilidad } from './components/ItemHabilidad';
import { ITEMS_EDUCACION, ITEMS_LABORAL } from './components/mock-item-elements';
import { ITEMS_HABILIDADES } from './components/mock-item-habilidades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    itemsEducacion: ItemElement[] = ITEMS_EDUCACION;
    itemsLaboral: ItemElement[] = ITEMS_LABORAL;
    itemsHabilidades: ItemHabilidad[] = ITEMS_HABILIDADES;

    ngOnInit(): void {
    }
}
