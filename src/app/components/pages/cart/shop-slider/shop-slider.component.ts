import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-shop-slider',
  templateUrl: './shop-slider.component.html',
  styleUrls: ['./shop-slider.component.css']
})
export class ShopSliderComponent extends ShopService {
  settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.sigma_custom-arrows .slick-prev',
    nextArrow: '.sigma_custom-arrows .slick-next',
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
}
