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
       { id: 1, name: 'Glimmervoid', image: "../assets/images/1.jpg", uri: "rgerg", released_at: "2", cmc: 0, color: "N" , superType: "Land", },
       { id: 2, name: 'Spellskite', image: "../assets/images/2.jpg", uri: "rgerg", released_at: "2", cmc: 2 , color: "Colorless" , superType: "Artifact", subType:"Creature" },
       { id: 3, name: 'Arrest', image: "../assets/images/arrest.jpg", uri: "rgerg", released_at: "2", cmc: 3, color: "White" , superType: "Enchantment", },
       { id: 4, name: 'Polluted Delta', image: "../assets/images/polluted_delta.jpg", uri: "rgerg", released_at: "2", cmc: 0, color: "N" , superType: "Land", },
       { id: 5, name: 'Ib Halfheart, Goblin Tactician', image: "../assets/images/ib.jpg", uri: "rgerg", released_at: "3", cmc: 4, color: "Red" , superType: "Creature", },
       { id: 6, name: 'Kindled Fury', image: "../assets/images/fury.jpg", uri: "rgerg", released_at: "", cmc: 1, color: "Red" , superType: "Instant", },
       { id: 7, name: 'Mox Opal', image: "../assets/images/mox_opal.jpg", uri: "rgerg", released_at: "", cmc: 0, color: "N" , superType: "Artifact" , },
       { id: 8, name: 'Terravore', image: "../assets/images/terravore.jpg", uri: "rgerg", released_at: "", cmc: 3, color: "Green" , superType: "Creature", },
       { id: 9, name: 'Leonin Arbiter', image: "../assets/images/arbiter.jpg", uri: "rgerg", released_at: "", cmc: 2, color: "White" , superType: "Creature" , },
       { id: 10, name: 'Land Grant', image: "../assets/images/land_grant.jpg", uri: "rgerg", released_at: "", cmc: 2, color: "Green" , superType: "Sorcery" , },
       { id: 11, name: 'Winterflame', image: "../assets/images/winterflame.jpg", uri: "rgerg", released_at: "", cmc: 3, color: "Red Blue" , superType: "Instant", },
       { id: 12, name: 'Blaze', image: "../assets/images/blaze.jpg", uri: "rgerg", released_at: "", cmc: 1, color: "Red"  , superType: "Sorcery" , },
       { id: 13, name: 'Pendelhaven', image: "../assets/images/pendelhaven.jpg", uri: "rgerg", released_at: "", cmc: 0, color: "N" , superType: "Land" , },
       { id: 14, name: 'Ugin\'s Construct', image: "../assets/images/construct.jpg", uri: "rgerg", released_at: "", cmc: 4, color: "Colorless" , superType: "Artifact", subType:"Creature" },
       { id: 15, name: 'Unnerve', image: "../assets/images/unnerve.jpg", uri: "rgerg", released_at: "", cmc: 4, color: "Black" , superType:"Sorcery" , },

       //card color search should be contains not ==, check sub type and supertype
     ];
     return { cards };
   }

   genId(cards: Cards[]): number {
     return cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 11;
   }
}
