import { Component } from '@angular/core';
import { ShopService } from 'src/app/components/services/shop.service';

@Component({
  selector: 'app-top-picks',
  templateUrl: './top-picks.component.html',
  styleUrls: ['./top-picks.component.css']
})
export class TopPicksComponent extends ShopService {

}
