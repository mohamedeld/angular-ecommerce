import { Component, effect, input } from '@angular/core';
import { ICustomerComment } from '../../../../types/types';

@Component({
  selector: 'app-customer-comment',
  imports: [],
  templateUrl: './customer-comment.component.html',
  styleUrl: './customer-comment.component.scss',
})
export class CustomerCommentComponent {
  customerComment!: ICustomerComment;
  stars: number[] = [];
  comment = input.required<ICustomerComment>();

  constructor() {
    effect(() => {
      const val = this.comment();
      if (val) {
        this.customerComment = val;
        this.stars = Array(val.stars).fill(0);
      }
    });
  }
}
