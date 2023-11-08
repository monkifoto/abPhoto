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
import { PostListComponent } from './blog/post-list/post-list.component';
import { ViewPostComponent } from './blog/view-post/view-post.component';
import { NewPostComponent } from './blog/new-post/new-post.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

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
    ServicesComponent,
    PostListComponent,
    ViewPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
