import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../product-list/ProductType';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ProductConditionType } from '../product-list/ProductConditionType';
import { IProduct } from '../../model/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('Form') addProductForm: NgForm | undefined;
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  
  public ProductType = ProductType;

  constructor(private router: Router) { }

  productView: IProduct = {
    Id: -1,
    User: '',
    Title: '',
    Type: ProductType.SHOE,
    Size: '',
    Condition: ProductConditionType.NEW,
    Price: 0,
    Year: 0,
    City: '',
    Description: ''
  };

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
    console.log(this.addProductForm)
  }

  selectTab(tabId: number){
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
      console.log("success");
    }
  }
}
