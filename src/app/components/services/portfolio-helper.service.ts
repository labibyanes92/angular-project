import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import portfolio from '../data/portfolio/portfolio.json';
import portfoliocategory from '../data/portfolio/category.json';
import portfoliotags from '../data/portfolio/tags.json';
import client from '../data/author.json';

@Injectable({
  providedIn: 'root'
})
export class PortfolioHelperService implements AfterContentInit {

  // pagination
  page: number = 1;
  public portfoliopost = portfolio;
  public portfoliodetails = portfolio;
  public category = portfoliocategory;
  public portfoliocategory = portfoliocategory;
  public tags = portfoliotags;
  public portfoliotags = portfoliotags;
  public clients = client;
  public portfolioclient = client;
  constructor(
    private route: ActivatedRoute
  ) {
  }
  // category
  public getCategories(items: string | any[]) {
    var elems = portfoliocategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Tags
  public getTags(items: string | any[]) {
    var elems = portfoliotags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Client
  public getClient(items: string | any[]) {
    var elems = client.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Filter
  // Category Filter
  public setCategory(id: any) {
    this.portfoliocategory = id;
  }
  public getCategory() {
    return this.portfoliocategory;
  }
  public getPostsByCategory(catId: string) {
    return this.portfoliopost = portfolio.filter((item: { category: number[]; }) => { return item.category.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.portfoliotags = id;
  }
  public getTag() {
    return this.portfoliotags;
  }
  public getPostsByTags(tagId: string) {
    return this.portfoliopost = portfolio.filter((item: { tags: number[]; }) => { return item.tags.includes(parseInt(tagId)) });
  }
  // Client Filter
  public setClients(id: any) {
    this.portfolioclient = id;
  }
  public getClients() {
    return this.portfolioclient;
  }
  public getPostsByClients(clientId: string) {
    return this.portfoliopost = portfolio.filter((item: { client: number[]; }) => { return item.client.includes(parseInt(clientId)) });
  }
  // Fetch All filter
  public setPosts() {
    var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '';
    var postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '';
    var postsByClients = this.getClients() != undefined ? this.getPostsByClients(this.getClients()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.portfoliopost = postsByCategory;
    } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.portfoliopost = postsByTags;
    } else if ((postsByClients != '' || postsByClients != undefined || postsByClients != null) && postsByClients.length > 0) {
      this.portfoliopost = postsByClients;
    }
  }
  // Post Details
  public setPost(id: any) {
    this.portfoliodetails = portfolio.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setCategory(this.route.snapshot.params.catId);
    this.setTag(this.route.snapshot.params.tagId);
    this.setClients(this.route.snapshot.params.clientId);
    this.setPosts();
    this.setPost(this.route.snapshot.params.id);
  }
  // Post Navigation
  public postnavigation(items: string | any[], index: number) {
    var output = [],
      id,
      item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
      item = items[index - 1];
      id = item.id;
      // Show the previous button 
      output.push("<div class='sigma_single-pagination-item sigma_single-pagination-prev'> <a href='/portfolio-details/" + item.id + "'> <i class='fa fa-arrow-left'></i><div class='sigma_single-pagination-content'><h6>" + item.title.slice(0, 20) + "</h6> <span>Prev Post</span></div> </a></div>");
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
      // Show next button 
      item = items[index + 1];
      id = item.id;
      output.push("<div class='sigma_single-pagination-item sigma_single-pagination-next'> <a href='/portfolio-details/" + item.id + "'><div class='sigma_single-pagination-content'><h6>" + item.title.slice(0, 20) + "</h6> <span>Next Post</span></div><i class='fa fa-arrow-right'></i> </a></div>");
    }

    return output;
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fa fa-facebook-f",
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fa fa-twitter",
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fa fa-linkedin",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      },
      {
        title: "pinterest",
        iconClass: "fa fa-pinterest-p",
        link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
      }
    ];
    return socialIcons;
  } 
  openSocialPopup(social: any){
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
}
