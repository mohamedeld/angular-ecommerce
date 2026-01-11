export interface Category {
  imageUrl: string;
  name: string;
}

export interface Product {
  name: string;
  imageUrl: string;
  oldPrice: string;
  price: string;
  description: string;
}

export interface ICustomerComment {
  name: string;
  position: string;
  imageUrl: string;
  stars: number;
  comment: string;
}
