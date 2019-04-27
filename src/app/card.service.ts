import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Cards } from './card.model';
import { Observable, observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiURL = 'api/cards';

  cards: Observable<Cards[]>;  
  card: Cards[];
  constructor(private _hhtp: HttpClient) { }

  getCards(): Observable<Cards[]> {
  return this._hhtp.get<Cards[]>(this.apiURL )
    .pipe(
     // tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Cards[]>('getCards', []))
    );
  }

  getCard(id: number): Observable<Cards> {
    //return this._hhtp.get<Cards>(this.apiURL+id);

    const url = `${this.apiURL}/${id}`;
    return this._hhtp.get<Cards>(url).pipe(
     // tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Cards>(`getCard id=${id}`))
    );
    
  }

 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // public getCardId(id: string): Observable<Cards>{
  //   return new Observable<Cards>((observer)=>{
  //     setTimeout(()=>{
  //       const foundCard=this._hhtp.find((card)=>{
  //         return card.id==id;

  //       });
  //       observer.next(foundCard);

  //     }, 500);
  //   });

  // }


}

// const cards = [{
//   id: 1,
//   name: "Evil Spirit",
//   price: 44.33,
//   image: '/assets/images/1.jpg'
// },
// {
//   id: 2,
//   name: "Evil Soul",
//   price: 55.33,
//   image: '/assets/images/2.jpg'

// }
// ]