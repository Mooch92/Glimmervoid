import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Cards } from '../card.model';
import {Observable} from 'rxjs';

export interface Option{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-card-sort',
  templateUrl: './card-sort.component.html',
  styleUrls: ['./card-sort.component.css']
})
export class CardSortComponent implements OnInit {
  selectedOption: string;
  options: Option[] = [
    {value: 'id', viewValue: 'ID'},
    {value: 'image', viewValue: 'Image'},
    {value: 'uri', viewValue: 'URI'},
    {value: 'released_at', viewValue: 'Released at'}
  ]

  sortBySelection(a, b){
    return a.selectedOption.localeCompare(b.selectedOption);
  }

  constructor() { }

  ngOnInit() {
    console.log()
  }

}
