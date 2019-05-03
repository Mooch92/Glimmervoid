import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../card.model';
import {Observable} from 'rxjs';
import {CardSortComponent} from '../card-sort/card-sort.component';

export interface Option{
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  options: Option[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'image', viewValue: 'Image'},
    {value: 'uri', viewValue: 'URI'},
    {value: 'released_at', viewValue: 'Released at'}
  ]
  cards: Cards[] = [];


  sortBySelection(a, b){
    return a.selectedOption.localeCompare(b.selectedOption);
  }

  constructor(private cardService: CardService) { }
  ngDoCheck(){
    console.log("doin a check");
    console.log(this.selectedOption.value);
    this.cards.sort((a,b) => a[this.selectedOption.value].localeCompare(b[this.selectedOption.value]));
    console.log(this.cards);
  }

  delete(id: number): void {  
    this.cards.splice(id, 1);
  }
  
  ngOnInit() {
    const cardsObservable = this.cardService.getCards();
  

     
    cardsObservable.subscribe((data: Cards[]) =>{
      this.cards = data;
      console.log(this.cards.sort((a,b) => a['name'].localeCompare(b['name'])));
    },
    (err)=>{
    },
    ()=>{
    } );

    
    console.log(this.cards)


  }
  selectedOption = this.options[0]; //: string;

}
