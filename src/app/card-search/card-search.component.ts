import { Component, OnInit } from '@angular/core';
import { Cards } from '../card.model';
import { CardService} from '../card.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  search(terem: string): void{
    
  }
}
