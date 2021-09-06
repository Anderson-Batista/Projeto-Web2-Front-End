import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pao } from './pao.model';

@Injectable({
  providedIn: 'root'
})
export class PaoService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByFornada(id_for: String): Observable<Pao[]> {
    const url = `${this.baseUrl}/paes?fornada=${id_for}`
    return this.http.get<Pao[]>(url)
  }

}
