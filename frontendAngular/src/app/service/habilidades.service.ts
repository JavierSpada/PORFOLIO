import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemElement } from '../components/ItemElement';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  private apiURL = "http://localhost:8080/habilidades"


  constructor(
    private http: HttpClient
  ) { }

  getHabilidades(): Observable<ItemElement[]> {
    return this.http.get<ItemElement[]>(this.apiURL);
  }

  delete(item: ItemElement): Observable<ItemElement> {
    return this.http.delete<ItemElement>(this.apiURL+ "/" + item.id);
  }
  create(item: ItemElement): Observable<ItemElement> {
    return this.http.post<ItemElement>(this.apiURL+ "/", item);
  }
}
