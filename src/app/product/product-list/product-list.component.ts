import { Component, OnInit } from '@angular/core';
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
      this.User = "Mia Bosheva"
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
