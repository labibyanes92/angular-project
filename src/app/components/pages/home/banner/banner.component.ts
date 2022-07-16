import { Component, OnInit } from '@angular/core';
import data from '../../../data/homebanner.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public bannerdata = data;
  constructor() { }
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
