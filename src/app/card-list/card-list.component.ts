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

 
 public cards = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {

     this.cardService.getCards()
    .subscribe(data => this.cards=data);

    //.subscribe((data) => console.log(data));

  

  }

}
