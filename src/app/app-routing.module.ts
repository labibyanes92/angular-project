import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-v2/home-v2.module').then(m => m.HomeV2Module), data: { breadcrumb: 'Homepage' } },
  // About Us
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  // Portfolio
  { path: 'portfolio', loadChildren: () => import('./components/pages/portfolio/portfolio.module').then(m => m.PortfolioModule), data: { breadcrumb: 'Portfolio' } },
  { path: 'portfolio/cat/:catId', loadChildren: () => import('./components/pages/portfolio/portfolio.module').then(m => m.PortfolioModule), data: { breadcrumb: 'Portfolio' } },
  { path: 'portfolio/tag/:tagId', loadChildren: () => import('./components/pages/portfolio/portfolio.module').then(m => m.PortfolioModule), data: { breadcrumb: 'Portfolio' } },
  { path: 'portfolio/client/:clientId', loadChildren: () => import('./components/pages/portfolio/portfolio.module').then(m => m.PortfolioModule), data: { breadcrumb: 'Portfolio' } },
  { path: 'portfolio-details/:id', loadChildren: () => import('./components/pages/portfolio-details/portfolio-details.module').then(m => m.PortfolioDetailsModule), data: { breadcrumb: 'Portfolio Details' } },
  // Services
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: 'Services' } },
  { path: 'service-details', loadChildren: () => import('./components/pages/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { breadcrumb: 'Service Details' } },
  // Team
  { path: 'team', loadChildren: () => import('./components/pages/team/team.module').then(m => m.TeamModule), data: { breadcrumb: 'Team' } },
  { path: 'team-details/:id', loadChildren: () => import('./components/pages/team-details/team-details.module').then(m => m.TeamDetailsModule), data: { breadcrumb: 'Team Details' } },
  // FAQ's
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  { path: 'faqs/search/:query', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Gallery
  { path: 'gallery', loadChildren: () => import('./components/pages/gallery/gallery.module').then(m => m.GalleryModule), data: { breadcrumb: 'Gallery' } },
  // Contact Us
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  // Shop
  { path: 'shop', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop Grid' } },
  { path: 'shop/search/:query', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop Grid' } },
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop Grid' } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop Grid' } },
  { path: 'shop/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop Grid' } },
  { path: 'shop-left', loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule), data: { breadcrumb: 'Shop Left' } },
  { path: 'shop-right', loadChildren: () => import('./components/pages/shop-right/shop-right.module').then(m => m.ShopRightModule), data: { breadcrumb: 'Shop Right' } },
  { path: 'shop-details/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: 'Shop Details' } },
  // Cart
  { path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: 'Cart' } },
  // Checkout
  { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: 'Checkout' } },
  // Wishlist
  { path: 'wishlist', loadChildren: () => import('./components/pages/wishlist/wishlist.module').then(m => m.WishlistModule), data: { breadcrumb: 'Wishlist' } },
  // Blog
  { path: 'blog-grid', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog', loadChildren: () => import('./components/pages/blog-list/blog-list.module').then(m => m.BlogListModule), data: { breadcrumb: 'Blog List' } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: 'Blog Details' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
