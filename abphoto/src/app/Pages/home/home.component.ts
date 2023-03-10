import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  url_0 = ["0", "../../../assets/home/IMG_8203.jpg", "Studio", "Diverse Studio"];
  url_1 = ["1", "../../../assets/home/MKY05379-Edit.jpg", "Portraits", "Family and Individual Portraits"];
  url_2 = ["2", "../../../assets/home/A7405937-Edit.jpg", "Headshots", "Amazing Headshots"];
  url_3 = ["3", "../../../assets/home/MKI06844-Edit.jpg", "Product", "Product Photogaphy"];

constructor(){}

ngOnInit(){

}

}
