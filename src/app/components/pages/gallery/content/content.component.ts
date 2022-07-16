import { Component, OnInit } from '@angular/core';
import galleryblock from '../../../data/gallery/gallery.json';
import gallerycategory from '../../../data/gallery/category.json';
import { Category } from '../../../services/filter/category';
import { Item } from '../../../services/filter/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public activeItem: number;
  constructor() {
    this.activeItem = 1;
  }
  // Filter
  items: Item[] = galleryblock;
  categories: Category[] = gallerycategory;
  filteredItems: Item[] = [...this.items];

  filterItemsByCategory(category: Category, id: number,) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.category.includes(parseInt(category.id));
    });
    this.activeItem = id
  }
  reset(id: number) {
    this.filteredItems = [...this.items];
    this.activeItem = id
  }

  ngOnInit(): void {
  }

}
