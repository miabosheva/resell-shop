import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { IProduct } from './IProduct.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  User = "user1234"
  products: Array<IProduct> = [];
  
  constructor(private route: ActivatedRoute, private productService: ProductsService){}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.User = "miabosheva"
    }
    this.productService.getAllProducts(this.User).subscribe({
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
