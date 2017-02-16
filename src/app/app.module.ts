import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './shared/site-header.component'
import { SiteIndexComponent } from './index/site-index.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { CategoriesComponet } from './index/categories/categories.component';
import { ProductsComponent } from './index/products/products.component';
import { SignupComponent } from './index/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { StarRatingComponent } from "./index/products/star-rating.component";
import { SiteFooterComponent } from './shared/site-footer.component';

import { ProductsDataService } from './index/products/products-data.service';

@NgModule({
  declarations:[
    AppComponent,
    SiteHeaderComponent,
    SiteIndexComponent,
    CarouselComponent,
    CategoriesComponet,
    ProductsComponent,
    SignupComponent,
    ContactComponent,
    DetailComponent,
    StarRatingComponent,
    SiteFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'index', component: SiteIndexComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'detail:/id',  component: DetailComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: 'index', pathMatch:'full' }
  ])
  ],
  providers: [ ProductsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
