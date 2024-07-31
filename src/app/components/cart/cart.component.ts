import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
// export class CartComponent implements OnInit {
//   cartItems: IProduct[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCart();
//   }
// }
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
}
