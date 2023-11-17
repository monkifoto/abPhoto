import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadshotsComponent } from './Pages/headshots/headshots.component';
import { HomeComponent } from './Pages/home/home.component';
import { PortraitsComponent } from './Pages/portraits/portraits.component';
import { ProductsComponent } from './Pages/products/products.component';
import { StudioComponent } from './Pages/studio/studio.component';
import { ServicesComponent } from './Pages/services/services.component';
import { PostListComponent } from './blog/post-list/post-list.component';
import { TestPageComponent } from './Pages/test-page/test-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'headshot', component: HeadshotsComponent},
  {path: 'studio', component: StudioComponent},
  {path: 'portrait', component: PortraitsComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'blog', component: PostListComponent },
  {path: 'test', component: TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
