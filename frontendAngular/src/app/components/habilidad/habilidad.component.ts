import { Component, Input, OnInit } from '@angular/core';
import { ItemHabilidad } from '../ItemHabilidad';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  @Input() items: ItemHabilidad[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
