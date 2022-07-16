import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { TopPicksComponent } from './top-picks/top-picks.component';
import { RecentSliderComponent } from './recent-slider/recent-slider.component';
import { ShopGalleryComponent } from './shop-gallery/shop-gallery.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { BlogInstaComponent } from './blog-insta/blog-insta.component';
import { HotProductsComponent } from './hot-products/hot-products.component';
import { ShopBlockComponent } from './shop-block/shop-block.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, TopPicksComponent, RecentSliderComponent, ShopGalleryComponent, ShopCategoryComponent, BlogInstaComponent, HotProductsComponent, ShopBlockComponent, FilterProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeModule { }
