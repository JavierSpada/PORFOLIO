import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemElement } from '../components/ItemElement';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = "http://localhost:8080/usuario"


  constructor(
    private http: HttpClient 
  ) { }

  getUsuario(): Observable<ItemElement[]> {
    return this.http.get<ItemElement[]>(this.apiURL);
  }
}
