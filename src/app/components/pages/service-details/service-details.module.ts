import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './service-details.component';
import { SharedModule } from '../../shared/shared.module';
import { InfoTextComponent } from './info-text/info-text.component';
import { VideoBoxComponent } from './video-box/video-box.component';
import { ServiceBlockComponent } from './service-block/service-block.component';


@NgModule({
  declarations: [ServiceDetailsComponent, InfoTextComponent, VideoBoxComponent, ServiceBlockComponent],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ServiceDetailsModule { }
