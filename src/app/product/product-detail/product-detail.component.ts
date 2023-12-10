import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId: number = -1;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params) => {
        this.productId = +params['id'];
      }
    )
  }
  
  onSelectNext(){
    this.productId += 1;
    this.router.navigate(['/product-detail', this.productId])
  }

}
