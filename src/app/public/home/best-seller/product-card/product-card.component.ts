import { Component, input } from '@angular/core';
import { Product } from '../../../../types/types';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  isHovering = false;
  onMouseEnter(show: boolean) {
    this.isHovering = show;
  }
  productInput = input<Product>();
}
