import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId: number = -1;
  product = new Product();

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductsService) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params) => {
        this.productId = +params['id'];
        this.productService.getProduct(this.productId).subscribe(
          (data?: Product) => {
            this.product = data!;
            console.log(this.product.Image)
          }
        )
      }
    )
  }

}
