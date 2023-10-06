import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover:string=""
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string ="Atari Digital"
  @Input()
  gamePrice:string ="R$ 1000,00"
  constructor() { }

  ngOnInit(): void {
  }

}
