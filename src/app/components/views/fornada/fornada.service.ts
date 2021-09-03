import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fornada } from './fornada.model';

@Injectable({
  providedIn: 'root'
})
export class FornadaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Fornada[]>{
    const url = `${this.baseUrl}/fornadas`
    return this.http.get<Fornada[]>(url)
  }
}
