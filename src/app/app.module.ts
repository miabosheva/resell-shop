import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';

const appRoutes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "my-profile", component: ProductListComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "delete/:id", component: DeleteProductComponent},
  {path: "product-detail/:id", component: ProductDetailComponent},
  {path: "user/login", component: UserLoginComponent},
  {path: "user/register", component: UserRegisterComponent},
  {path: "**", component: ProductListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductCardComponent,
    ProductListComponent,
    NavBarComponent,
    ProductDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    MatSelectCountryModule.forRoot('de'),
    NgxGalleryModule
  ],
  providers: [
    ProductsService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
