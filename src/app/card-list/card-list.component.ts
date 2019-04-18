import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards=[{
    id: 1,
    name: "Evil Spirit",
    price: 44.33,
    image: '/assets/images/1.jpg'
  },
  {
    id: 2,
    name: "Evil Soul",
    price: 55.33,
    image: '/assets/images/2.jpg'

  }
]

  constructor() { }

  ngOnInit() {
  }

}
