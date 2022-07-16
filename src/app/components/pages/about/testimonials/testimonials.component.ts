import { Component, OnInit } from '@angular/core';
import data from '../../../data/testimonial.json';
import author from '../../../data/author.json';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public testimonials = data;
  public authors = author;
  constructor() { }
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false
  }

  ngOnInit(): void {
  }

}
