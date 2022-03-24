import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Church } from './components/church.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChurchesService {
  baseUrl = 'http://omni-church-api.herokuapp.com/churches';
  // baseUrl = 'http://localhost:8000/churches';

  constructor(private http: HttpClient) {}

  list(): Observable<Church[]> {
    return this.http.get<Church[]>(this.baseUrl);
  }

  detail(id: string): Observable<Church> {
    return this.http.get<Church>(this.baseUrl + `/${id}`)
  }

  update(id: string, church: Church){
    console.log(church)
    return this.http.patch<Church>(this.baseUrl + `/${id}`, church)
  }

  delete(id?: number): Observable<Church> {
    const url = `${this.baseUrl}/${id}`;
    console.log(url);
    return this.http.delete<Church>(url);
  }
}
