import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { CtaComponent } from './cta/cta.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CtaTwoComponent } from './cta-two/cta-two.component';
import { CanvasComponent } from './canvas/canvas.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MobileMenuComponent, SearchFormComponent, BreadcrumbComponent, ShopSidebarComponent, BlogSidebarComponent, CtaComponent, SponsorsComponent, CtaTwoComponent, CanvasComponent],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    NgbModule,
    BreadcrumbModule,
    NgxSliderModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbComponent, ShopSidebarComponent, BlogSidebarComponent, CtaComponent, SponsorsComponent, CtaTwoComponent]
})
export class SharedModule { }
