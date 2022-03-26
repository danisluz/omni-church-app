import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from './components/sector.model';

@Injectable({
  providedIn: 'root',
})
export class SectorService {
  baseUrl = 'http://omni-church-api.herokuapp.com/sectors';
  // baseUrl = 'http://localhost:8000/sectors';

  constructor(private http: HttpClient) {}

  list(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.baseUrl);
  }
}
