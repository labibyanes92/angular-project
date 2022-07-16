import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ShopBlockComponent } from './shop-block/shop-block.component';
import { ShopAdvComponent } from './shop-adv/shop-adv.component';
import { FreshArrivalsComponent } from './fresh-arrivals/fresh-arrivals.component';
import { BlogInstalComponent } from './blog-instal/blog-instal.component';


@NgModule({
  declarations: [HomeV2Component, BannerComponent, TrendingProductsComponent, CategoriesComponent, FeaturedProductsComponent, BlogPostComponent, ShopBlockComponent, ShopAdvComponent, FreshArrivalsComponent, BlogInstalComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeV2Module { }
