import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  public productId: number = -1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.params['id']);
    console.log(this.productId);
  }

}
