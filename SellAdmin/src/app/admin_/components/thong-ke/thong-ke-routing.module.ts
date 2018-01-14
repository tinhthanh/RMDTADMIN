import { ThongKeTheoLuocXemComponent } from './thong-ke-theo-luoc-xem/thong-ke-theo-luoc-xem.component';
import { ThongKeTheoChuDeComponent } from './thong-ke-theo-chu-de/thong-ke-theo-chu-de.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'thong-ke-theo-chu-de',
    component:  ThongKeTheoChuDeComponent
  }, {
    path: 'thong-ke-theo-luoc-xem',
    component: ThongKeTheoLuocXemComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongKeRoutingModule { }
