import { Component, OnInit } from '@angular/core';
import data from '../../../data/shopgallery.json';

@Component({
  selector: 'app-shop-gallery',
  templateUrl: './shop-gallery.component.html',
  styleUrls: ['./shop-gallery.component.css']
})
export class ShopGalleryComponent implements OnInit {
  public shopgallery = data;
  constructor() { }

  ngOnInit(): void {
  }

}
