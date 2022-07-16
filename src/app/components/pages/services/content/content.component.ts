import { Component, OnInit } from '@angular/core';
import data from '../../../data/services.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // pagination
  page: number = 1;
  // Data
  public serviceblock = data;
  constructor() { }

  ngOnInit(): void {
  }

}
