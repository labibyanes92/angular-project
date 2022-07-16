import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [TeamComponent, ContentComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class TeamModule { }
