import { DanhSachNguoiDungComponent } from './danh-dach-nguoi-dung/danh-sach-nguoi-dung.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NguoiDungComponent } from 'app/admin/components/nguoi-dung/nguoi-dung.component';

const routes: Routes =   [
  {
      path: '' ,
      component:  NguoiDungComponent,
      children: [
        {
          path: 'danh-sach-nguoi-dung',
          component: DanhSachNguoiDungComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiDungRoutingModule {}
