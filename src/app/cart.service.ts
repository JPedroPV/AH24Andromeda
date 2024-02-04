import { Injectable } from '@angular/core';
import { Part } from './parts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Part[] = [];

  addToCart(part: Part) {
    if(this.hasItemType(part.type)){
      return false;
    }
    this.items.push(part);
    return true;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  hasItemType(partType: string){
    return this.items.find(part => part.type === partType);
  }
}
