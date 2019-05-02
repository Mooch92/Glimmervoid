import { Component, OnInit } from '@angular/core';
import { InMemoryScryfallService } from '../in-memory-scryfall.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(private inMemoryDB: InMemoryScryfallService) { }
  deck = this.inMemoryDB.createDb();
  exportable: string;
  ngOnInit() {
  }
  export() {
    for (let x of this.deck.cards) {
      if (x.name != null) {
        console.log(x.name);
        this.exportable = this.exportable + "\r\n1 " + x.name; // will technically need the count...
      }
    }
    var blob = new Blob([this.exportable], { type: "text/plain;charset=utf-8" });
    console.log(this.exportable);
    saveAs(blob.slice(10, blob.size), "deck.dec"); //undefined kept showing up for osme reason
  }
}
