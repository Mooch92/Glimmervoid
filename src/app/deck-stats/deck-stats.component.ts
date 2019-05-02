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
    
    
  
    //  var typeArr = [];

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
   /* console.log(AvgCMC);
    //end of colors

    //get all the types and the count
    //game plan here is add each type into an array and the loop over the array counting the number of appearances of each thing
    //probably not ideal but here we are
  /*  for (let x of db.cards) { //this fills typeArr with each cards type and subtype
      if (x.subType != null && x.subType != "")
        this.typeArr.push(x.subType);
      this.typeArr.push(x.superType);
      //  console.log("pushed " + x.superType);
    }

    console.log(this.typeArr);


    for (let y of this.typeArr) { // for each card type 
      console.log(y);
      for (let x in this.typeArr) { // for each element in type arr
        if (this.typeArr[x] == y && y == "Land") { // if typecount element at x is the same as y (if the y element is a land, and it hits a land somewhere, )
          //this.typecounts[x] +=1
          this.landCount += 1;
          console.log(this.landCount);
        }
      }
    }*/

  }
}
