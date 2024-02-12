import { Component, Input} from '@angular/core';
import { IProductBase } from '../../model/iproductbase';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})

export class ProductCardComponent {
  @Input()
  product!: IProductBase; 

  @Input() hideIcons!: boolean;

  ngOnInit(){
    console.log(this.product.Image);
  }
}
