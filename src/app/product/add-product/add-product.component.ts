import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../product-list/ProductType';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ProductConditionType } from '../product-list/ProductConditionType';
import { IProduct } from '../../model/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
[x: string]: any;
  // @ViewChild('Form') addProductForm: NgForm | undefined;
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  
  public ProductType = ProductType;

  addProductForm!: FormGroup;
  nextCLicked: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  createAddPropertyForm(){
    this.addProductForm = this.fb.group({
      BasicInfo: this.fb.group({
        Title: [null, Validators.required],
        Type: [null, Validators.required],
        Size: [null, Validators.required],
        Condition: [null, Validators.required],
        Year: [null],
        City: [null],
        Description: [null]
      }),
      PriceAndPaymentInfo: this.fb.group({
        Price: [null, Validators.required]
      })
    })
  }

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
    this.createAddPropertyForm();
  }

  onBack(){
    this.router.navigate(['/']);
  }

  keys() : Array<string> {
    var keys = Object.keys(this.ProductType);
    return keys.slice(keys.length / 2);
  }

  getBasicInfo(){
    return this.addProductForm.controls['BasicInfo'] as FormGroup;
  }

  getPriceAndPaymentInfo(){
    return this.addProductForm.controls['PriceAndPaymentInfo'] as FormGroup;
  }

  onSubmit(){
    console.log(this.addProductForm)
  }

  selectTab(tabId: number){
    this.nextCLicked = true;
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
      console.log("success");
    }
  }
}
