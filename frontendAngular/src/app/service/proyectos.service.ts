import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemElement } from '../components/ItemElement';

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {
  private apiURL = "http://localhost:8080/proyectos"

  constructor(
    private http: HttpClient 
  ) { }

  getProyectos(): Observable<ItemElement[]> {
    return this.http.get<ItemElement[]>(this.apiURL);
  }
}
