import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../card.model';
import {Observable} from 'rxjs';

@Component({
  // selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

 
  cards: Cards[] = [];

  constructor(private cardService: CardService) { }

  delete(id: number): void {  
    this.cards.splice(id, 1);
  }
  
  ngOnInit() {
    const cardsObservable = this.cardService.getCards();
  
     
    cardsObservable.subscribe((data: Cards[]) =>{
      this.cards = data
    },
    (err)=>{

    },
    ()=>{
      
    } );

    
    console.log(this.cards)

    //.subscribe((data) => console.log(data));


  }

}
