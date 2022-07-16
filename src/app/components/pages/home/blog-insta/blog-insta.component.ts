import { Component, OnInit } from '@angular/core';
import data from '../../../data/instagram.json';

@Component({
  selector: 'app-blog-insta',
  templateUrl: './blog-insta.component.html',
  styleUrls: ['./blog-insta.component.css']
})
export class BlogInstaComponent implements OnInit {
  public instagram = data;
  constructor() { }

  ngOnInit(): void {
  }

}
