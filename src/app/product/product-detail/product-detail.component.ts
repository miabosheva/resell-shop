import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId: number = -1;
  product = new Product();
  
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductsService) { }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '100%',
        height: '100%',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/placeholder.jpg',
        medium: 'assets/images/placeholder.jpg',
        big: 'assets/images/placeholder.jpg'
      },
      {
        small: 'assets/images/placeholder.jpg',
        medium: 'assets/images/placeholder.jpg',
        big: 'assets/images/placeholder.jpg'
      },
      {
        small: 'assets/images/placeholder.jpg',
        medium: 'assets/images/placeholder.jpg',
        big: 'assets/images/placeholder.jpg'
      },{
        small: 'assets/images/placeholder.jpg',
        medium: 'assets/images/placeholder.jpg',
        big: 'assets/images/placeholder.jpg'
      },
      {
        small: 'assets/images/placeholder.jpg',
        medium: 'assets/images/placeholder.jpg',
        big: 'assets/images/placeholder.jpg'
      }
    ];

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
