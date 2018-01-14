import { ChartModule } from './../../../components/chart/chart';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThongKeRoutingModule } from './thong-ke-routing.module';
import { ThongKeTheoChuDeComponent } from './thong-ke-theo-chu-de/thong-ke-theo-chu-de.component';
import { ThongKeTheoLuocXemComponent } from './thong-ke-theo-luoc-xem/thong-ke-theo-luoc-xem.component';

@NgModule({
  imports: [
    CommonModule,
    ThongKeRoutingModule,
    ChartModule
  ],
  declarations: [ThongKeTheoChuDeComponent,
    ThongKeTheoChuDeComponent,
    ThongKeTheoLuocXemComponent
  ]
})
export class ThongKeModule { }
