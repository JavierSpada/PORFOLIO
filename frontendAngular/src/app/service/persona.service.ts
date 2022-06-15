import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemElement } from '../components/ItemElement';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiURL = "http://localhost:8080/persona"

  constructor(
    private http: HttpClient 
  ) { }

  getPersona(): Observable<ItemElement[]> {
    return this.http.get<ItemElement[]>(this.apiURL);
  }

  update(item: ItemElement): Observable<ItemElement> {
    return this.http.put<ItemElement>(this.apiURL+ "/" + item.id, item);
  }
}
