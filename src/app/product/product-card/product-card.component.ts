import { Component, Input} from '@angular/core';
import { IProductBase } from '../../model/iproductbase';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})

export class ProductCardComponent {
  @Input()
  product!: IProductBase;
  locationMyProfile: boolean = false;

  @Input() hideIcons!: boolean;

  constructor(private router: Router){
  }

  ngOnInit(){
    if(this.router.url == "/my-profile"){
      this.locationMyProfile = true;
    }
    else {
      this.locationMyProfile = false;
    }
    // console.log(this.product.Image);
  }
}
