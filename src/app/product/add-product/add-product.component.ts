import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../product-list/ProductType';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('Form') addProductForm: NgForm | undefined;
  
  public ProductType = ProductType;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  keys() : Array<string> {
    var keys = Object.keys(this.ProductType);
    return keys.slice(keys.length / 2);
  }

  onSubmit(){
    console.log();
    console.log(this.addProductForm)
  }
}
