import { Component } from '@angular/core';
import { InstaCardComponent } from './insta-card/insta-card.component';

@Component({
  selector: 'app-insta-stories',
  imports: [InstaCardComponent],
  templateUrl: './insta-stories.component.html',
  styleUrl: './insta-stories.component.scss',
})
export class InstaStoriesComponent {
  readonly images: string[] = [
    'assets/images/lady_one.jpg',
    'assets/images/lady_two.jpg',
    'assets/images/lady_three.jpg',
    'assets/images/lady_four.png',
  ];
}
