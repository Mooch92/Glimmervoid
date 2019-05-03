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
       { id: 11122, name: 'Abu Jafar', cmc: 3, color: "White",description:"When Abu Ja'far dies, destroy all creatures blocking or blocked by it. They can't be regenerated.", image: "https://img.scryfall.com/cards/small/en/chr/1.jpg?1517813031", uri: "https://scryfall.com/card/chr/1/abu-jafar", price: { usd: '$19.23', euro: '€11.43' }, released_at: "01/12/1996", },
       { id: 13456, name: 'Spellskite', cmc: 2, color:"Colorless", description:"Change a target of target spell or ability to Spellskite.", image: "https://img.scryfall.com/cards/small/en/mm2/230.jpg?1517813031", uri: "https://scryfall.com/card/mm2/230/spellskite", price: { usd: '$7.94', euro: '€6.37' }, released_at: "43/5/45", },
       { id: 29876, name: 'Shower of Sparks', cmc: 3, color: "Red",description:"Shower of Sparks deals 1 damage to target creature and 1 damage to target player or planeswalker.", image: "https://img.scryfall.com/cards/small/en/ddl/61.jpg?1517813031", uri: "https://scryfall.com/card/ddl/61/shower-of-sparks", price: { usd: "$0.08", euro: "€0.21" }, released_at: "454655", },
       { id: 34098, name: 'Deadwood Treefolk', cmc: 4, color:"Green Black", description: "When Deadwood Treefolk enters the battlefield or leaves the battlefield, return another target creature card from your graveyard to your hand.", image: "https://img.scryfall.com/cards/small/en/c13/141.jpg?1517813031", uri: "https://scryfall.com/card/c13/141/deadwood-treefolk", price: { usd: "$0.19", euro: "€0.20" }, released_at: "ut657877", },
       { id: 44765, name: 'BlackBlade Reforged', cmc: 4, color:"Colorless", description:"Whenever a creature you control attacks alone, that creature gets +1/+1 until end of turn.", image: "https://img.scryfall.com/cards/small/front/9/d/9dccac19-a915-4189-beb8-5d279a15a54e.jpg?1555602155", uri: "https://scryfall.com/card/dom/211/blackblade-reforged", price: { usd: "$1.30", euro: "€0.34" }, released_at: "3937927", },
       { id: 48976, name: 'Worship', cmc: 4, color:"White", description:"If you control a creature, damage that would reduce your life total to less than 1 reduces it to 1 instead.", image: "https://img.scryfall.com/cards/small/en/9ed/55.jpg?1517813031", uri: "https://scryfall.com/card/9ed/55/worship", price: { usd: "$8.55", euro: "€4.64" }, released_at: "3937927", },
       { id: 51334, name: 'Triskelavus', cmc: 4, color:"White", description:"Flying.Triskelavus enters the battlefield with three +1/+1 counters on it.", image: "https://img.scryfall.com/cards/small/en/cm2/226.jpg?1534113141", uri: "https://scryfall.com/card/cm2/226/triskelavus", price: { usd: "$0.18", euro: "€0.13" }, released_at: "aa433326", },
       { id: 63345, name: 'Adriana, Captain of the Guard', cmc: 4, color:"White", description:"When Alaborn Zealot blocks a creature, destroy that creature and Alaborn Zealot.", image: "https://img.scryfall.com/cards/small/en/cn2/73.jpg?1517813031", uri: "https://scryfall.com/card/cn2/73/adriana-captain-of-the-guard", price: { usd: "$0.35", euro: "€0.21" }, released_at: "ll42229", },
       { id: 73345, name: 'Protean Hulk', cmc: 7, color:"Green", description:"When Protean Hulk dies, search your library for any number of creature cards with total converted mana cost 6 or less and put them onto the battlefield. Then shuffle your library.", image: "https://img.scryfall.com/cards/small/en/a25/185.jpg?1523883036", uri: "https://scryfall.com/card/a25/185/protean-hulk", price: { usd: "$3.19", euro: "€2.25" }, released_at: "jkk1382", },
       { id: 80987, name: 'Bonescythe Sliver', cmc: 2, color:"White", description:"Join forces — Starting with you, each player may pay any amount of mana. Each player creates X 1/1 white Soldier creature tokens, where X is the total amount of mana paid this way.", image: "https://img.scryfall.com/cards/small/en/m14/9.jpg?1517813031", uri: "https://scryfall.com/card/m14/9/bonescythe-sliver", price: { usd: "$2.93", euro: "€1.34" }, released_at: "3937927", },
       
     ];
     return { cards };
   }

   genId(cards: Cards[]): number {
     return cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 11;
   }
}
