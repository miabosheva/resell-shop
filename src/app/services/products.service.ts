import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProduct } from '../product/product-list/IProduct.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this.http.get('data/properties.json').pipe(
        map(data => {
          const propertiesArray: IProduct[] = Object.values(data);
          return propertiesArray;
        })
    );
  }

}
