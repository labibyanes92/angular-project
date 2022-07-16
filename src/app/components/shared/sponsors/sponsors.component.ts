import { Component, OnInit } from '@angular/core';
import data from '../../data/sponsors.json';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  public sponsors = data;
  constructor() { }

  ngOnInit(): void {
  }

}
