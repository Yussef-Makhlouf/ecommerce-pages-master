import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormsModule } from '@angular/forms';
// export interface IProduct {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }
// // const routes: Routes = [
//   { path: '', component: ProductListComponent },
//   { path: 'product/:id', component: ProductDetailsComponent },
//   { path: 'cart', component: CartComponent }
// ];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductDetailsComponent, CartComponent, CommonModule,RouterLink,AdminPanelComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'ecommerce-pages';
}
