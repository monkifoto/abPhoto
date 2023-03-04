import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  url_0 = ["0", "http://source.unsplash.com/800x600/?studio", "Studio", "Diverse Studio"];
  url_1 = ["1", "http://source.unsplash.com/800x600/?portraits", "Portraits", "Family and Individual Portraits"];
  url_2 = ["2", "http://source.unsplash.com/800x600/?headshots", "Headshots", "Amazing Headshots"];
  url_3 = ["3", "http://source.unsplash.com/800x600/?product", "Product", "Product Photogaphy"];

constructor(){}

ngOnInit(){

}

}
