import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
 
  card : any;

  constructor(private cardService: CardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.card= this.cardService.getCard(+this.activatedRoute.snapshot.params['id']);

  }

}
