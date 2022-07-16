import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [PortfolioComponent, ContentComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class PortfolioModule { }
