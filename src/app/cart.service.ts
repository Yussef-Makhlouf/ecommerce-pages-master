import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  quantity: number = 0;

  addToCart(product: any): void {
    const existingItemIndex = this.cart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      this.cart[existingItemIndex].quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.quantity += product.quantity; // Update the quantity property
  }

  removeFromCart(product: any): void {
    const index = this.cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      // this.cart.splice(index, 1);


      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }

    }
  }

  getCart(): any[] {
    return this.cart;
  }
}
