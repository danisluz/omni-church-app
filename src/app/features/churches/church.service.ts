import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Church } from './components/church.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChurchesService {
  baseUrl = 'http://localhost:3000/churches';

  constructor(private http: HttpClient) {}

  list(): Observable<Church[]> {
    this.http.get<any>('http://localhost:3333/churches').subscribe( retorno => {
      console.log(retorno)
    });
    return this.http.get<Church[]>(this.baseUrl);
  }

  detail(id: string): Observable<Church> {
    return this.http.get<Church>(this.baseUrl + `/${id}`)
  }

  delete(id?: number): Observable<Church> {
    const url = `${this.baseUrl}/${id}`;
    console.log(url);
    return this.http.delete<Church>(url);
  }
}
