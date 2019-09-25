import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Player } from '../models/player';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NbaPlayersApiService {

  
  b_path = 'https://www.balldontlie.io/api/v1/players';

  constructor( private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  //OBTENER DETALLE DE UN JUGADOR
  getPlayer(id): Observable<Player> {
    return this.http.get<Player>(this.b_path + '/' + id).pipe(retry(2), catchError(this.handleError))
  }

  //OBTENER LA LISTA DE JUGADORES
  getList(): Observable<Player> {
    return this.http.get<Player>(this.b_path).pipe(map(result=>result.data))
  }

  // ACTUALIZAR DATOS JUAGOR
  updatePlayer(id, player): Observable<Player> {
    return this.http.put<Player>(this.b_path + '/' + id, JSON.stringify(player), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  loadPage(page) {
    // OBTENER PAGINACION
    return this.http.get<any>(`https://www.balldontlie.io/api/v1/players?page=${page}`).pipe(map(result=>result.meta))
  }

  
}
