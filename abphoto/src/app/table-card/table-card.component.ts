import { Component, Input } from '@angular/core';
import { TableCard } from '../table-card.model';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
})
export class TableCardComponent {
  @Input() tableCard?: TableCard;

  constructor(){};

  ngOnInit():void{
    console.log(this.tableCard);
  }
}
