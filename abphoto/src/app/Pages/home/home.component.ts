import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  url_0 = ["0", "../../../assets/home/IMG_8203.jpg", "Studio", "Consistency 100% of the time"];
  url_1 = ["1", "../../../assets/home/MKY05379-Edit.jpg", "Portraits", "Showcase personality, character, or lifestyle"];
  url_2 = ["2", "../../../assets/home/A7405937-Edit.jpg", "Headshots", "Convey professionalism and approachability"];
  url_3 = ["3", "../../../assets/home/MKI06844-Edit.jpg", "Product", "Capturing the essence and details of a product"];

constructor(){}

ngOnInit(){

}

}
