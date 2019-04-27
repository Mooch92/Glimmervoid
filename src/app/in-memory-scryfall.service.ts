import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Cards} from "./card.model"
 @Injectable({
  providedIn: 'root'
})
 export class InMemoryScryfallService implements InMemoryDbService 
 
 {
   createDb() {
     const cards = [
       { id: 1, name: 'card1', image: "../assets/images/1.jpg", uri: "sdjjnks", released_at: "43/5/45", },
       { id: 2, name: 'cardd2', image: "../assets/images/2.jpg", uri: "dfsf", released_at: "454655", },
       { id: 3, name: 'eveil', image: "../assets/images/3.jpg", uri: "nbvnb", released_at: "ut657877", },
       { id: 4, name: 'frienfly', image: "../assets/images/1.jpg", uri: "rgerg", released_at: "3937927", },
       
     ];
     return { cards };
   }

   genId(cards: Cards[]): number {
     return cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 11;
   }
}
