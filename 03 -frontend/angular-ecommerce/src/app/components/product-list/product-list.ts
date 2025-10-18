import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
   this.listProducts();
  }
  listProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }
  
  // Action handlers used by the template. Keep simple for now.
  viewProduct(product: Product): void {
    // Replace with navigation or modal logic later
    console.log('View product', product);
  }

  addToCart(product: Product): void {
    // Replace with cart service integration later
    console.log('Add to cart', product);
  }



}
