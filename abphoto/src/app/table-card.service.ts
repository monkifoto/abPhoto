import { Injectable } from '@angular/core';
import { TableCard } from './table-card.model';

@Injectable({ providedIn: 'root' })
export class TableCardService {
  listOfCards: TableCard[] = [
    new TableCard(
      '30 Min Session',
      "30 minute sessions are designed for individuals with busy schedules or those feel more comfortable in front of the camera. These can be a great budget-friendly option for those needing something more affordable.",
      '../../../assets/Headshots/Portraits/_MKY1614-Edit.jpg',
      175
    ),
    new TableCard(
      '60 Min Session',
      'Some people may need more time to feel comfortable in front of the camera, and a longer session can give you the time you need. This also affords outfit changes, different backgrounds,  giving the individual the opportunity to have multiple looks.',
      '../../../assets/Headshots/Portraits/_MKY5488-Edit.jpg',
      250
    ),
    new TableCard(
      '90 Min Session',
      'Some people may need more time to feel comfortable in front of the camera, and a longer session can give you the time you need. This also affords outfit changes, different backgrounds, makeup and hair adjustments,  giving the individual the opportunity to have multiple looks. A longer session can also provide more time to focus on smaller details, such as jewelry or other accessories, resulting in more detailed and polished headshots',
      '../../../assets/Headshots/Portraits/DSC02080-Edit.jpg',
      300
    )
  ];

  GetCards() {
    return this.listOfCards;
  }

  AddCard(card: TableCard) {
    this.listOfCards.push(card);
  }

  RemoveCard(index: number) {
    console.log(index);
    this.listOfCards.splice(index, 1); 
    console.log(this.listOfCards);
  }
}
