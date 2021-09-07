import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pao } from './pao.model';

@Injectable({
  providedIn: 'root'
})
export class PaoService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByFornada(id_for: String): Observable<Pao[]> {
    const url = `${this.baseUrl}/paes?fornada=${id_for}`
    return this.http.get<Pao[]>(url)
  }

  findById(id: String): Observable<Pao> {
    const url = `${this.baseUrl}/paes/${id}`
    return this.http.get<Pao>(url)
  }

  update(pao: Pao): Observable<Pao> {
    const url = `${this.baseUrl}/paes/${pao.id}`
    return this.http.put<Pao>(url, pao)
  }

  create(pao: Pao, id_for: String): Observable<Pao>{
    const url = `${this.baseUrl}/paes?fornada=${id_for}`
    return this.http.post<Pao>(url, pao)
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/paes/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
