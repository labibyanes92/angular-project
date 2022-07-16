import { Component } from '@angular/core';
import { BlogHelperService } from '../../services/blog-helper.service';
import data from '../../data/instagram.json';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent extends BlogHelperService {
  public instagram = data;
}
