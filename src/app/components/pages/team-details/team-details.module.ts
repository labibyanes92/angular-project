import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { VideoBoxComponent } from './video-box/video-box.component';
import { ServiceBlockComponent } from './service-block/service-block.component';


@NgModule({
  declarations: [TeamDetailsComponent, ContentComponent, VideoBoxComponent, ServiceBlockComponent],
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class TeamDetailsModule { }
