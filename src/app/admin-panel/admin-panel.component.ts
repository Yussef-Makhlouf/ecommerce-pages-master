import { CommonModule } from '@angular/common';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [ CommonModule ,FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})

export class AdminPanelComponent implements OnInit {
  products: any[] = [];
  newProduct: any = { title: '', price: 0, description: '', category: '', image: '' };
  editProduct: any = { id: null, title: '', price: 0, description: '', category: '', image: '' };
  editMode: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(product => {
      this.products.push(product);
      this.newProduct = { title: '', price: 0, description: '', category: '', image: '' };
    });
  }

  startEdit(product: any): void {
    this.editMode = true;
    this.editProduct = { ...product };
  }

  updateProduct(): void {
    this.productService.updateProduct(this.editProduct.id, this.editProduct).subscribe(updatedProduct => {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      this.products[index] = updatedProduct;
      this.editMode = false;
      this.editProduct = { id: null, title: '', price: 0, description: '', category: '', image: '' };
    });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editProduct = { id: null, title: '', price: 0, description: '', category: '', image: '' };
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }
}
