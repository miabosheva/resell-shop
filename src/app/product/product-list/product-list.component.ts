import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { IProduct } from './IProduct.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  
  products: Array<IProduct> = [];
  
  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
