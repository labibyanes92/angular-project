import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';
import data from '../../data/instagram.json';

@Component({
  selector: 'app-shop-sidebar',
  templateUrl: './shop-sidebar.component.html',
  styleUrls: ['./shop-sidebar.component.css']
})
export class ShopSidebarComponent extends ShopService {
  public instagram = data;
}
