import { Injectable } from '@angular/core';
import { Product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts ()
  {
    return[
      new Product('Tomato', 25, 10, 'https://bit.ly/320pkNh'),
      new Product('Pineapple', 125, 0, 'https://bit.ly/2TRP1Lf')
    ]
  }
}