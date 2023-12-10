import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NavBarComponent } from './product/nav-bar/nav-bar.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductsService } from './services/products.service';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const appRoutes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "my-profile", component: ProductListComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "product-detail/:id", component: ProductDetailComponent},
  {path: "**", component: ProductListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
