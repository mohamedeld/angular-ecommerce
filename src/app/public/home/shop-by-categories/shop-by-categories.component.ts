import { Component } from '@angular/core';
import { Category } from '../../../types/types';
import { CategoryCardComponent } from './category-card/category-card.component';

@Component({
  selector: 'app-shop-by-categories',
  imports: [CategoryCardComponent],
  templateUrl: './shop-by-categories.component.html',
  styleUrl: './shop-by-categories.component.scss',
})
export class ShopByCategoriesComponent {
  readonly categoriesList: Array<Category> = [
    { imageUrl: 'assets/images/casual_wear.png', name: 'Casual Wear' },
    { imageUrl: 'assets/images/western_wear.png', name: 'Western Wear' },
    { imageUrl: 'assets/images/ethnic_wear.png', name: 'Ethnic Wear' },
    { imageUrl: 'assets/images/kids_wear.png', name: 'Kids Wear' },
  ];
}
