import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { ResetDataComponent } from 'app/admin/components/pages/reset-data/reset-data.component';


const routes: Routes = [
  { path: '', component: PagesComponent
, children: [
    {
        path: 'dang-nhap',
        component: DangNhapComponent
    },
    {
      path: 'reset-data',
      component: ResetDataComponent
    }
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
