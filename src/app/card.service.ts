import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Cards } from './card.model';
import { Observable, observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiURL = 'api/cards';

  constructor(private _hhtp: HttpClient) { }

  getCards(): Observable<Cards[]> {
  return this._hhtp.get<Cards[]>(this.apiURL )
    .pipe(
      catchError(this.handleError<Cards[]>('getCards', []))
    );
  }

  getCard(id: number): Observable<Cards> {

    const url = `${this.apiURL}/${id}`;
    return this._hhtp.get<Cards>(url).pipe(
      catchError(this.handleError<Cards>(`getCard id=${id}`))
    );
    
  }

 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      return of(result as T);
    };
  }

  searchCards(term: string): Observable<Cards[]>{
    if(!term.trim()){
      return of([]);
    }
    return this._hhtp.get<Cards[]>(`${this.apiURL}/?name=${term}`).pipe(
      catchError(this.handleError<Cards[]>('searchCards', []))
    );
  }

}
