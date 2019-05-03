import { Component, OnInit } from '@angular/core';
import { InMemoryScryfallService } from '../in-memory-scryfall.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-deck-stats',
  templateUrl: './deck-stats.component.html',
  styleUrls: ['./deck-stats.component.css']
})
export class DeckStatsComponent implements OnInit {
  typeArr: any[] = [];
  typecounts: any[] = [];
  landCount: number =0;
  cmc = 0;
  count = 0;
  AvgCMC: string[] = []; //calculating average cmc
  colors = new Set();
  
  constructor(private cardMemory: InMemoryScryfallService) {

  }
  

  ngOnInit() {
    console.log("init deck stats");
    var db = this.cardMemory.createDb();
    
    
  


    //get average cmc
    for (let x of this.cardMemory.createDb().cards) {
      if (x.cmc != null) { this.cmc += x.cmc; }
      this.count += 1;
      this.AvgCMC.push((this.cmc / this.count).toFixed(2));
      console.log("asdfasdf");

    }
  
    this.count = 0; //reset count
    //end of cmc

    //get all colors of cards in a deck
    for (let y of db.cards) {
      var temp = y.color.split(" "); // split up card colors if theres more than one color into an array
      for (var x = 0; x <= temp.length; x++) { // for each item in that array of colors
        if (!this.colors.has(temp[x]) && y.color != "N" && y.color != "Colorless" && typeof y.color !== undefined) { // if the set of colors doesnt have that color
        if(temp[x] !== undefined){
        this.colors.add(temp[x]); // add the color to the array 
        console.log(this.colors);
        }
        }
      }
    }

    
    console.log(this.typecounts);

  }
}
