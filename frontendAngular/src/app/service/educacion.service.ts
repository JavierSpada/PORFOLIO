import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemElement } from '../components/ItemElement';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiURL = "http://localhost:8080/educacion"


  constructor(
    private http: HttpClient
  ) { }

  getEducacion(): Observable<ItemElement[]> {
    return this.http.get<ItemElement[]>(this.apiURL);
  }

  delete(item: ItemElement): Observable<ItemElement> {
    return this.http.delete<ItemElement>(this.apiURL+ "/" + item.id);
  }
  create(item: ItemElement): Observable<ItemElement> {
    return this.http.post<ItemElement>(this.apiURL+ "/", item);
  }
}
