import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProduct } from '../model/iproduct';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient, private router: Router) { }

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:7232/api/city');
  }

  getProduct(id: number){
    return this.getAllProducts().pipe(
      map(productsArray => {
        return productsArray.find(p => p.id === id);
      })
    );
  }

  getAllProducts(username?: string): Observable<IProduct[]>{
    if(!username){
      return this.http.get<Product[]>('https://localhost:7232/api/product/list');
    } else{
      return this.http.get<Product[]>('https://localhost:7232/api/product/list/' + username);
    }
  }

  addProduct(product: Product){
    return this.http.post('https://localhost:7232/api/product', product);
  }

  deleteProduct(id: number){
    return this.http.delete('https://localhost:7232/api/product/delete/' + id);
  }
}
