import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';
import { ItemElement } from '../ItemElement';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() tipo: string = "";
  @Input() items: ItemElement[] = [];

  constructor(private experienciaLaboralService: ExperienciaLaboralService) { }

  async ngOnInit(): Promise<void> {
    this.experienciaLaboralService.getExperiencias().subscribe((experencias) => {
      this.items = experencias;
      console.log(this.items);
  });
  }

  eliminar(item : ItemElement) {
    if (this.tipo === "laboral") {
      this.experienciaLaboralService.delete(item).subscribe(() => 
      this.items = this.items.filter(t => t.id != item.id)
    );
    }

  }
}
