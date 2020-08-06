import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { OpenSidebarOnSwipeDirective } from './open-sidebar-on-swipe.directive';
import { SidebarSwipeService } from './sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from './set-get-width-sidebar.pipe';
import { SwipeDemoComponent } from './swipe-demo/swipe-demo.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { Swiper } from 'swiper';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule,
    Swiper,
    NgxUsefulSwiperModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    OpenSidebarOnSwipeDirective,
    SetGetWidthSidebarPipe,
    SwipeDemoComponent,

 
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, SidebarSwipeService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/