import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../model/iproduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  username = localStorage.getItem('username') ?? undefined;
  products: Array<IProduct> = [];

  constructor(private router: Router, private productService: ProductsService){}

  ngOnInit(): void {
    if(this.router.url == '/my-profile'){
      this.productService.getAllProducts(this.username).subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
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
}
