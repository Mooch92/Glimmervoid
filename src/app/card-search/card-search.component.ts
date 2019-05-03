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

}
