import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { ShopSliderComponent } from './shop-slider/shop-slider.component';


@NgModule({
  declarations: [CartComponent, ContentComponent, ShopSliderComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule
  ]
})
export class CartModule { }
