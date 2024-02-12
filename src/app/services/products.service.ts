import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductType } from '../product/product-list/ProductType';
import { ProductConditionType } from '../product/product-list/ProductConditionType';
import { IProduct } from '../model/iproduct';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProduct(id: number){
    return this.getAllProducts().pipe(
      map(productsArray => {
        return productsArray.find(p => p.Id === id);
      })
    );
  }

  getAllProducts(User?: string): Observable<IProduct[]>{
    return this.http.get('data/properties.json').pipe(
        map((data: any) => {
          const propertiesArray: IProduct[] = [];
          
          let localProducts = localStorage.getItem('newProduct');
          if (localProducts) {
            let localProductsParsed = JSON.parse(localProducts)
            Object.keys(localProductsParsed).forEach(id => {
              if (User){
                if(localProductsParsed.hasOwnProperty(id)) {
                  localProductsParsed[id].Type = localProductsParsed[id].Type;
                  localProductsParsed[id].Condition = localProductsParsed[id].Condition;
                  propertiesArray.push(localProductsParsed[id]);
                }
              }
              else {
                localProductsParsed[id].Type = localProductsParsed[id].Type;
                localProductsParsed[id].Condition = localProductsParsed[id].Condition;
                propertiesArray.push(localProductsParsed[id]);
              }
            })
          }
          
          Object.keys(data).forEach(id => {
            if (User){
              if (data.hasOwnProperty(id) && data[id].User === User) {
                data[id].Type = ProductType[data[id].Type];
                data[id].Condition = ProductConditionType[data[id].Condition];
                propertiesArray.push(data[id]);
              }
            }
            else{
              data[id].Type = ProductType[data[id].Type];
              data[id].Condition = ProductConditionType[data[id].Condition];
              propertiesArray.push(data[id]);
            }
          });

          return propertiesArray;
        })
    );
  }

  addProduct(product: Product){
    let newProduct = [product];
    if (localStorage.getItem('newProduct')){
      newProduct = [product, ...JSON.parse(localStorage.getItem('newProduct') ?? "")];
    }
    localStorage.setItem('newProduct', JSON.stringify(newProduct));
  }
}
