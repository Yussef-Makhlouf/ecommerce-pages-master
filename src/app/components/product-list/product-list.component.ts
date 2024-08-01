import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink,],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService, private cartService: CartService,private route: Router) { }

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((products )=> {
  //     this.products = products;

  //   });

  // }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  // getProductById(id: number): void {
  //   this.route.navigate(['/', id]);
  // }


  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}


