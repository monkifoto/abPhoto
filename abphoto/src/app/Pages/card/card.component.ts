import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() url: string[] = [];

  constructor(){
   
  }
  ngOnInit(){
    var card = document.getElementById(this.url[0]);
    card?.setAttribute("style", "background-image: url(" +this.url[1] + ")");
    console.log("this.url: " + this.url[1]);
  }
}
