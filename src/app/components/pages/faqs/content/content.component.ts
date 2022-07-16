import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import data from '../../../data/faqs.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit , AfterContentInit {
  public faqs = data;
  public searchText: string;
  public searchQuery: string;
  constructor(
    private router: Router, 
    private route: ActivatedRoute
    ) {
    this.searchText = '';
    this.searchQuery = '';
  }
  // Search Filter
  onSubmit() {
    if (this.searchText === "") {
      return;
    } else { 
      this.router.navigate(['faqs/search', this.searchText]);
    }
  }
  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    return this.faqs = data.filter((item: { title: (string) }) => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    });
  }
  // Fetch All filter
  public setPosts() {
    var postsBySearch = this.getSearch() != undefined ? this.getPostsBySearch(this.getSearch()) : '';
    if ((postsBySearch != '' || postsBySearch != undefined || postsBySearch != null) && postsBySearch.length > 0) {
      this.faqs = postsBySearch;
    }
  }
  ngAfterContentInit(): void {
    this.setSearch(this.route.snapshot.params.query);
    this.setPosts();
  }

  ngOnInit(): void {
  }

}
