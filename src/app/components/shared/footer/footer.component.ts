import { Component, OnInit } from '@angular/core';
import data from '../../data/portfolio/portfolio.json';
import shop from '../../data/shop/shop.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public portfolio = data;
  public shopblock = shop;
  constructor() { }

  ngOnInit(): void {
  }

}
