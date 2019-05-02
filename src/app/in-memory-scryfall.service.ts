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
       { id: 11122, name: 'Abu Jafar', description:"When Abu Ja'far dies, destroy all creatures blocking or blocked by it. They can't be regenerated.", image: "https://img.scryfall.com/cards/small/en/chr/1.jpg?1517813031", uri: "https://api.scryfall.com/cards/023b5e6f-10de-422d-8431-11f1fdeca246", price: { usd: '$7.94', euro: '€6.32' }, released_at: "01/12/1996", },
       { id: 13456, name: 'Spellskite', description:"When this creature enters the battlefield, roll a six-sided die. You gain life equal to the result", image: "https://img.scryfall.com/cards/small/front/6/e/6eb1c64f-be2c-4033-913d-d8482a169509.jpg?1555601942", uri: "https://scryfall.com/card/mm2/230/spellskite", price: { usd: '$7.94', euro: '€6.32' }, released_at: "43/5/45", },
       { id: 29876, name: 'Shower of Sparks', description:"The next time an instant or sorcery spell would deal damage to you this turn, that spell deals that damage to its controller instead.", image: "https://img.scryfall.com/cards/small/front/8/5/8532d72a-b2d2-49e1-85ea-35f4c91c6c8d.jpg?1555601898", uri: "https://scryfall.com/card/ddl/61/shower-of-sparks", price: { usd: "$0.08", euro: "€0.21" }, released_at: "454655", },
       { id: 34098, name: 'Deadwood Treefolk', description: "Whenever a creature enters the battlefield under your control, you gain 1 life.", image: "https://img.scryfall.com/cards/small/front/e/a/eaa8f485-0f3d-4a0b-bcdf-6c27d1d2bce0.jpg?1551375060", uri: "https://scryfall.com/card/c13/141/deadwood-treefolk", price: { usd: "$0.19", euro: "€0.20" }, released_at: "ut657877", },
       { id: 44765, name: 'Puppet Master', description:"Whenever a creature you control attacks alone, that creature gets +1/+1 until end of turn.", image: "https://img.scryfall.com/cards/small/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.jpg?1555602155", uri: "https://scryfall.com/card/chr/23/puppet-master", price: { usd: "$0.88", euro: "€0.84" }, released_at: "3937927", },
       { id: 48976, name: 'Puppet Master',description:"Tap target creature.","power":"1 ", image: "https://img.scryfall.com/cards/small/front/9/a/9aef2a48-07bb-44e4-943f-f62fdc384a81.jpg?1555602113", uri: "https://scryfall.com/card/chr/23/puppet-master", price: { usd: "$0.88", euro: "€0.84" }, released_at: "3937927", },
       { id: 5e334, name: 'Triskelavus', description:"White spells you cast cost {W} more to cast.", image: "https://img.scryfall.com/cards/small/front/f/8/f8f4c56b-76d1-4c1c-a9d6-383278de272d.jpg?1555602060", uri: "https://scryfall.com/card/cm2/226/triskelavus", price: { usd: "$0.18", euro: "€0.13" }, released_at: "aa433326", },
       { id: 63345, name: 'Adriana, Captain of the Guard', description:"When Alaborn Zealot blocks a creature, destroy that creature and Alaborn Zealot.", image: "https://img.scryfall.com/cards/small/front/2/7/27946cc0-8278-4b45-8239-c22b5a57c40f.jpg?1555602022", uri: "https://scryfall.com/card/cn2/73/adriana-captain-of-the-guard", price: { usd: "$0.36", euro: "€0.23" }, released_at: "ll42229", },
       { id: 73345, name: 'Protean Hulk', description:"Target creature you control gets +1/+2 until end of turn", image: "https://img.scryfall.com/cards/small/front/b/d/bd29035d-819f-43c4-a8fb-d056b1ccfe16.jpg?1555601999", uri: "https://scryfall.com/card/a25/185/protean-hulk", price: { usd: "$3.08", euro: "€2.24" }, released_at: "jkk1382", },
       { id: 80987, name: 'Bonescythe Sliver', description:"Join forces — Starting with you, each player may pay any amount of mana. Each player creates X 1/1 white Soldier creature tokens, where X is the total amount of mana paid this way.", image: "https://img.scryfall.com/cards/small/front/2/0/206fd18a-f263-42cd-a77a-e40ae31a468a.jpg?1555601966", uri: "https://scryfall.com/card/m14/9/bonescythe-sliver", price: { usd: "$2.84", euro: "€1.32" }, released_at: "3937927", },
       
     ];
     return { cards };
   }

   genId(cards: Cards[]): number {
     return cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 11;
   }
}
