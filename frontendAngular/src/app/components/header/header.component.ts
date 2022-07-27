import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/AcercaDe';
import { AcercadeService } from 'src/app/service/acercade.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Portfolio Spada Javier';
  descripcion!: string;
  descripcionModicado!: string;
  isHidden: boolean = true;
  isAdmin: boolean = false;
  constructor(private acercadeService: AcercadeService, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.descripcionModicado = this.descripcion;
    this.personaService.getPersona().subscribe(
      data => {
        console.log("obtenerpersona");
        console.log(data);
        this.descripcion =  data["acercaDe"];
      },
      err => {
        this.descripcion = "";
        console.log(err)
      }
    );
  }

  confirmarEdicion() {
    console.log(' confirmar');
    this.acercadeService.update(new AcercaDe(1, this.descripcionModicado)).subscribe(
      data => {
        this.isHidden = true;
        this.descripcion = this.descripcionModicado;
      },
      err => {
        this.isHidden = false;
      }
    );

  }

  mostrarModificar(){
    console.log('asdfasdf');
    if (this.isHidden) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
    this.descripcionModicado = this.descripcion;
  }
}
