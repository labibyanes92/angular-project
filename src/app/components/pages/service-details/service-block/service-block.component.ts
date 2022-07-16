import { Component, OnInit } from '@angular/core';
import data from '../../../data/services.json';

@Component({
  selector: 'app-service-block',
  templateUrl: './service-block.component.html',
  styleUrls: ['./service-block.component.css']
})
export class ServiceBlockComponent implements OnInit {
  public serviceblock = data;
  constructor() { }

  ngOnInit(): void {
  }

}
