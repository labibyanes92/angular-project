import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends ShopService {
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    asNavFor: '.sigma_product-slider-2'
  };
  settingsThumb = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    focusOnSelect:true,
    asNavFor: '.sigma_product-slider-1',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };
}
