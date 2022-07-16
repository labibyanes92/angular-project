import { Component, OnInit } from '@angular/core';
import data from '../../../data/infobox.json';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  public infobox = data;
  constructor() { }

  ngOnInit(): void {
  }

}
