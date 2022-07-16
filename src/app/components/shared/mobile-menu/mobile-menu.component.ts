import { Component } from '@angular/core';
import { NavHelperService } from '../../services/nav-helper.service';
import data from '../../data/navigation.json';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent extends NavHelperService {

  public navigation = data;
  constructor(public helperService: NavHelperService) {
    super();
  }

}
