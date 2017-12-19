import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemKhoaHocComponent } from 'app/admin/components/khoa-hoc/them-khoa-hoc/them-khoa-hoc.component';
import { KhoaHocComponent } from 'app/admin/components/khoa-hoc/khoa-hoc.component';
const routes: Routes = [
  {
      path: '' ,
      component:  KhoaHocComponent,
      children: [
        {
          path: 'them-khoa-hoc',
          component: ThemKhoaHocComponent
        }
      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhoaHocRoutingModule { }