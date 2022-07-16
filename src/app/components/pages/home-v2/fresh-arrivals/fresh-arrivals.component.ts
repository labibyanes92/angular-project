import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-fresh-arrivals',
  templateUrl: './fresh-arrivals.component.html',
  styleUrls: ['./fresh-arrivals.component.css']
})
export class FreshArrivalsComponent extends ShopService {
  settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.fresh-arrival .slick-prev',
    nextArrow: '.fresh-arrival .slick-next',
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
}
