import { Component } from '@angular/core';
import { ICustomerComment } from '../../../types/types';
import { CustomerCommentComponent } from './customer-comment/customer-comment.component';

@Component({
  selector: 'app-customer-rate',
  imports: [CustomerCommentComponent],
  templateUrl: './customer-rate.component.html',
  styleUrl: './customer-rate.component.scss',
})
export class CustomerRateComponent {
  readonly comments: ICustomerComment[] = [
    {
      name: 'Leslie Alexander',
      position: 'Model',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
    },
    {
      name: 'Jacob Jones',
      position: 'Co-Founder',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
    },
    {
      name: 'Jenny Wilson',
      position: 'Fashion Designer',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
    },
  ];
}
