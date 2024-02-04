import { Injectable } from '@angular/core';
import { Part } from './parts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Part[] = [];

  addToCart(part: Part) {
    this.items.push(part);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
