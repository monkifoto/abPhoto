import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './Pages/card/card.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeadshotsComponent } from './Pages/headshots/headshots.component';
import { PortraitsComponent } from './Pages/portraits/portraits.component';
import { StudioComponent } from './Pages/studio/studio.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CarouselComponent } from './Pages/carousel/carousel.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BrandsComponent } from './brands/brands.component';
import { TableCardComponent } from './table-card/table-card.component';
import { TableCardListComponent } from './table-card-list/table-card-list.component';
import { SampleCodeComponent } from './sample-code/sample-code.component';
import { ServicesComponent } from './Pages/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    HeadshotsComponent,
    PortraitsComponent,
    StudioComponent,
    ProductsComponent,
    CarouselComponent,
    TestimonialsComponent,
    BrandsComponent,
    TableCardComponent,
    TableCardListComponent,
    SampleCodeComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
