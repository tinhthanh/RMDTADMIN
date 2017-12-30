import { DanhSachChuDe2Component } from './danh-sach-chu-de-2/danh-sach-chu-de-2.component';
import { ChuDe2Component } from './chu-de-2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: ChuDe2Component,
      children: [
        { path: 'danh-sach-chu-de-2', component: DanhSachChuDe2Component }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuDe2RoutingModule { }