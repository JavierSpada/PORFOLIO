import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AcercaDe } from '../model/AcercaDe'

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  private apiURL = "http://localhost:8080/personas"

  constructor(private http: HttpClient) { }

  update(acercaDe: AcercaDe): Observable<any> {
    return this.http.put(this.apiURL, acercaDe);
  }
}
