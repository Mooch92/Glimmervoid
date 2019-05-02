import { Component, OnInit } from '@angular/core';
import { Cards } from '../card.model';
import { CardService} from '../card.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {

  // cards: Cards[];
  // selectedCard: Cards;
  cards$: Observable<Cards[]>;
  private searchTerms = new Subject<string>();

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cards$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.cardService.searchCards(term)),
    );
  }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  // add(name: string): void{
  //   name = name.trim();
  //   if(!name){return;}
  //   this.cardService.addCard({name} as Cards)
  //     .subscribe(card => {
  //       this.cards.push(card);
  //     });
  // }

  // onSelect(card: Cards): void{
  //   this.selectedCard = card;
  // }

}
