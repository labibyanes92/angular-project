import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent extends ShopService {
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    vertical: true,
    verticalScrolling: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      }
    ]
  }
}
