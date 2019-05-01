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
       { id: 1, name: 'Spellskite', image: "../assets/images/1.jpg", uri: "https://scryfall.com/card/mm2/230/spellskite", price: {usd: '$7.94', euro: '€6.32'}, released_at: "43/5/45", },
       { id: 2, name: 'Shower of Sparks', image: "../assets/images/2.jpg", uri: "https://scryfall.com/card/ddl/61/shower-of-sparks", price: {usd: "$0.08", euro: "€0.21"}, released_at: "454655", },
       { id: 3, name: 'Deadwood Treefolk', image: "../assets/images/3.jpg", uri: "https://scryfall.com/card/c13/141/deadwood-treefolk", price: {usd: "$0.19", euro: "€0.20"}, released_at: "ut657877", },
       { id: 4, name: 'Puppet Master', image: "../assets/images/4.jpg", uri: "https://scryfall.com/card/chr/23/puppet-master", price: {usd: "$0.88", euro: "€0.84"}, released_at: "3937927", },
       { id: 5, name: 'Triskelavus', image: "../assets/images/5.jpg", uri: "https://scryfall.com/card/cm2/226/triskelavus", price: {usd: "$0.18", euro: "€0.13"}, released_at: "aa433326", },
       { id: 6, name: 'Adriana, Captain of the Guard', image: "../assets/images/6.jpg", uri: "https://scryfall.com/card/cn2/73/adriana-captain-of-the-guard", price: {usd: "$0.36", euro: "€0.23"}, released_at: "ll42229", },
       { id: 7, name: 'Protean Hulk', image: "../assets/images/7.jpg", uri: "https://scryfall.com/card/a25/185/protean-hulk", price: {usd: "$3.08", euro: "€2.24"}, released_at: "jkk1382", },
       { id: 8, name: 'Bonescythe Sliver', image: "../assets/images/8.jpg", uri: "https://scryfall.com/card/m14/9/bonescythe-sliver", price: {usd: "$2.84", euro: "€1.32"}, released_at: "3937927", },
     ];
     return { cards };
   }

   genId(cards: Cards[]): number {
     return cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 11;
   }
}
