import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Churches } from './components/churches.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChurchesService {
  baseUrl = 'http://localhost:3000/churches';

  constructor(private http: HttpClient) {}

  read(): Observable<Churches[]> {
    return this.http.get<Churches[]>(this.baseUrl);
  }

  delete(id?: number): Observable<Churches> {
    const url = `${this.baseUrl}/${id}`;
    console.log(url);
    return this.http.delete<Churches>(url);
  }
}
