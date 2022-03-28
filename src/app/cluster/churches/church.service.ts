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
    return this.http.get<Church>(this.baseUrl + `/${id}`);
  }

  update(id: string, church: Church): Observable<Church> {
    return this.http.patch<Church>(this.baseUrl + `/${id}`, church);
  }

  create(church: Church): Observable<Church> {
    return this.http.post<Church>(this.baseUrl, church);
  }

  delete(id: string): Observable<JSON> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<JSON>(url);
  }
}
