import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ItemElement } from '../components/ItemElement';
import { ITEMS_EDUCACION, ITEMS_LABORAL } from '../components/mock-item-elements';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  private apiURL = "http://localhost:4200/laborales"

  constructor(
    private http: HttpClient
  ) { }

  getExperiencia(): Observable<ItemElement[]> {
    return this.http.get<ItemElement[]>(this.apiURL);
  }

  delete(item: ItemElement): Observable<ItemElement> {
    return this.http.delete<ItemElement>(this.apiURL+ "/" + item.id);
  }
}
