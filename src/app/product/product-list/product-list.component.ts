import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../model/iproduct';


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
       
        var newProductUnparsed: string = localStorage.getItem('newProduct') ?? "";
        if (newProductUnparsed != ""){
          const newProduct: IProduct = JSON.parse(newProductUnparsed);
          if (newProduct) {
            this.products = [newProduct, ...this.products];
          }
        }
        
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
