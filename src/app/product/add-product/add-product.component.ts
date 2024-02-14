import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../product-list/ProductType';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ProductConditionType } from '../product-list/ProductConditionType';
import { IProduct } from '../../model/iproduct';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';
import { AlertifyService } from '../../services/alertify.service';

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
  product = new Product();
  public cities: string[] = [];

  addProductForm!: FormGroup;
  nextCLicked: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductsService,
    private alertify: AlertifyService
    ) { }

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
    id: -1,
    title: '',
    productType: ProductType.SHOE,
    size: '',
    conditionType: ProductConditionType.NEW,
    price: 0,
    year: 0,
    // City: '',
    description: ''
  };

  ngOnInit() {
    this.createAddPropertyForm();
    this.productService.getAllCities().subscribe(data=>{
      console.log(data);
      this.cities = data;
    });
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
    // console.log(this.addProductForm)
    this.mapProduct();
    console.log(this.product);
    if (this.BasicInfo.valid && this.PriceAndPaymentInfo.valid){
      this.productService.addProduct(this.product).subscribe(() =>
        {
          this.alertify.success("Product sucessfully published.");
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.alertify.error(error.error);
        }
      );
    } else {
      this.alertify.error('Please type in the required fields.');
    }
  }

  selectTab(tabId: number){
    this.nextCLicked = true;
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
      console.log("success");
    }
  }

  // Getter Methods
  get BasicInfo(){
    return this.addProductForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceAndPaymentInfo(){
    return this.addProductForm.controls['PriceAndPaymentInfo'] as FormGroup;
  }

  get Title(){
    return this.BasicInfo.controls['Title'] as FormControl;
  }

  get Type(){
    return this.BasicInfo.controls['Type'] as FormControl;
  }

  get Size(){
    return this.BasicInfo.controls['Size'] as FormControl;
  }

  get Condition(){
    return this.BasicInfo.controls['Condition'] as FormControl;
  }

  get Year(){
    return this.BasicInfo.controls['Year'] as FormControl;
  }

  get Description(){
    return this.BasicInfo.controls['Description'] as FormControl;
  }

  // get City(){
  //   return this.BasicInfo.controls['City'] as FormControl;
  // }

  get Price(){
    return this.PriceAndPaymentInfo.controls['Price'] as FormControl;
  }

  get Image(){
    return new FormControl;
  }

  mapProduct(): void{
    this.product.id = -1;
    this.product.productType = this.Type.value;
    this.product.title = this.Title.value;
    this.product.size = this.Size.value;
    this.product.conditionType = this.Condition.value;
    this.product.year = this.Year.value;
    this.product.description = this.Description.value;
    this.product.price = this.Price.value;
    this.product.username = localStorage.getItem('username') ?? "";
    // this.product.Image = "placeholder";
  }

}
