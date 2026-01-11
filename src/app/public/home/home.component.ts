import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ShopByCategoriesComponent } from './shop-by-categories/shop-by-categories.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { DealsOfMonthComponent } from './deals-of-month/deals-of-month.component';
import { CustomerRateComponent } from './customer-rate/customer-rate.component';
import { InstaStoriesComponent } from './insta-stories/insta-stories.component';
import { OurSupportComponent } from './our-support/our-support.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    ShopByCategoriesComponent,
    BestSellerComponent,
    DealsOfMonthComponent,
    CustomerRateComponent,
    InstaStoriesComponent,
    OurSupportComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
