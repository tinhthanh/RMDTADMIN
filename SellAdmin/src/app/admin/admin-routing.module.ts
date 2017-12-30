<<<<<<< HEAD
import { ChuDe2Component } from './components/chu-de-2/chu-de-2.component';
=======
import { NguoiDungModule } from './components/nguoi-dung/nguoi-dung.module';
>>>>>>> master
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: AdminMainComponent,
   children: [
    { path: 'prestashop', loadChildren: './components/prestashop/prestashop.module#PrestashopModule'},
    { path: 'khoa-hoc', loadChildren: './components/khoa-hoc/khoa-hoc.module#KhoaHocModule'},
    { path: 'chu-de', loadChildren: './components/chu-de/chu-de.module#ChuDeModule'},
    { path: 'chu-de-2', loadChildren: './components/chu-de-2/chu-de-2.module#ChuDe2Module'},
    { path: 'mau-demo', loadChildren: './components/mau-demo/mau-demo.module#MauDemoModule'},
    { path: 'nguoi-dung' , loadChildren: './components/quan-ly-nguoi-dung/danh-sach-nguoi-dung.module#DanhSachNguoiDungModule'}
   ]
   }
  ];
=======
  {
    path: '',
    component: AdminMainComponent,
    children: [
      {
        path: 'prestashop',
        loadChildren:
          './components/prestashop/prestashop.module#PrestashopModule'
      },
      {
        path: 'khoa-hoc',
        loadChildren: './components/khoa-hoc/khoa-hoc.module#KhoaHocModule'
      },
      {
        path: 'chu-de',
        loadChildren: './components/chu-de/chu-de.module#ChuDeModule'
      },
      {
        path: 'mau-demo',
        loadChildren: './components/mau-demo/mau-demo.module#MauDemoModule'
      },
      {
        path: 'nguoi-dung',
        loadChildren : './components/nguoi-dung/nguoi-dung.module#NguoiDungModule'
      }
    ]
  }
];
>>>>>>> master
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
