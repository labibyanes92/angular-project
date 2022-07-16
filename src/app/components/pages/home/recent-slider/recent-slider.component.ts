import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-recent-slider',
  templateUrl: './recent-slider.component.html',
  styleUrls: ['./recent-slider.component.css']
})
export class RecentSliderComponent extends ShopService {
  settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.top-picks .slick-prev',
    nextArrow: '.top-picks .slick-next',
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
