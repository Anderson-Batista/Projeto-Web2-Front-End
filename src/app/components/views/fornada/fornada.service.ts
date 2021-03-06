import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fornada } from './fornada.model';

@Injectable({
  providedIn: 'root'
})
export class FornadaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Fornada[]>{
    const url = `${this.baseUrl}/fornadas`
    return this.http.get<Fornada[]>(url)
  }

  findById(id: String): Observable<Fornada>{
    const url = `${this.baseUrl}/fornadas/${id}`
    return this.http.get<Fornada>(url)
  }

  create(fornada: Fornada): Observable<Fornada>{
    const url = `${this.baseUrl}/fornadas`
    return this.http.post<Fornada>(url, fornada);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/fornadas/${id}`
    return this.http.delete<void>(url)
  }

  update(fornada: Fornada): Observable<void> {
    const url = `${this.baseUrl}/fornadas/${fornada.id}`
    return this.http.put<void>(url, fornada)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
