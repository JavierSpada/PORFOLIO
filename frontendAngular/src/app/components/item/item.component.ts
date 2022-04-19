
import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';
import { ItemElement } from '../ItemElement';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() descripcion: string = "";
  @Input() fecha: string = "";
  @Input() urlImagen: string = "";


  constructor(
    private experienciaLaboralService: ExperienciaLaboralService
  ) { }

  ngOnInit(): void {
  
  }

  editar() {
    console.log(" dfasdfasdfasdf");
  }

  eliminar(item : ItemElement) {

  }

}
