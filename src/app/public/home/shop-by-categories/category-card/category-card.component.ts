import { Component, input } from '@angular/core';
import { Category } from '../../../../types/types';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  categoryInput = input<Category>();
}
