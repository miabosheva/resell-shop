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

  getAllProducts(User: string): Observable<IProduct[]>{
    return this.http.get('data/properties.json').pipe(
        map((data: any) => {
          const propertiesArray: IProduct[] = [];
          
          Object.keys(data).forEach(id => {
            if (data.hasOwnProperty(id) && data[id].User === User) {
              propertiesArray.push(data[id]);
            }
          });

          return propertiesArray;
        })
    );
  }

}
