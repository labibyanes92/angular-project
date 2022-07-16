import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { InfoBoxComponent } from './info-box/info-box.component';
import { CounterComponent } from './counter/counter.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [AboutComponent, InfoBoxComponent, CounterComponent, AboutUsComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class AboutModule { }
