import { Component, OnInit, Input } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
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

  constructor(private experienciaLaboralService: ExperienciaLaboralService, private educacionService: EducacionService) { }

  async ngOnInit(): Promise<void> {
    if (this.tipo === "laboral") {
      this.experienciaLaboralService.getExperiencias().subscribe((experencias) => {
        this.items = experencias;
        console.log(this.items);
    });
  }
  if (this.tipo === "educacion") {
    this.educacionService.getEducacion().subscribe((edu) => {
      this.items = edu;
      console.log(this.items);
  });
  }
}

  eliminar(item : ItemElement) {
    if (this.tipo === "laboral") {
      this.experienciaLaboralService.delete(item).subscribe(() => 
      this.items = this.items.filter(t => t.id != item.id)
    );
    }

  }
}
