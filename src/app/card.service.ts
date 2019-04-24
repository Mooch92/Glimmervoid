import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Cards } from './card.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiURL = 'https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1';

  //cards: Observable<Cards[]>;  
  constructor( private _hhtp: HttpClient) { }

  getCards(): Observable<Cards[]> {
  return this._hhtp.get<Cards[]>(this.apiURL );
  }

  getCard(id: number): Observable<Cards[]>{
    return this._hhtp.get<Cards[]>(this.apiURL)
  }

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