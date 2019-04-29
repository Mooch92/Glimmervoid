import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../card.service';
import { ActivatedRoute} from '@angular/router'
import { Cards } from '../card.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
 
  card: Cards;

  constructor(private cardService: CardService, private activatedRoute: ActivatedRoute) { }

  
  

  ngOnInit() {
    this.getCard();
    this.deleteCard();
    
    //   this.activatedRoute.params.subscribe(
    //   (params)=>{
       
    //       this.getID(+params['id']);
    //       console.log(this.card)

    //   }
    // )

  }
    
  getCard(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.cardService.getCard(id)

      .subscribe((card) => { this.card = card});
  }

  deleteCard(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.cardService.getCard(id)

      .subscribe((card) => { this.card = card});
  }

  // getID(cardid: number){
    
  //   this.cardService.getCard(cardid).subscribe(
  //     (cards: Cards[])=>{
        
  //       this.card=cards;
  //     }
  //   );
  // }

 

}
