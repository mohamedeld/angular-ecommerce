import { Component, input } from '@angular/core';

@Component({
  selector: 'app-insta-card',
  imports: [],
  templateUrl: './insta-card.component.html',
  styleUrl: './insta-card.component.scss',
})
export class InstaCardComponent {
  imageUrlInput = input<string>();
  isHovering = false;

  onMouseEnter(show: boolean): void {
    this.isHovering = show;
  }
}
