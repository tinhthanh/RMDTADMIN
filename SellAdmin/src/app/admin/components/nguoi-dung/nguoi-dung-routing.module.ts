<<<<<<< HEAD
import { LichSuGiaoDichComponent } from './lich-su-giao-dich/lich-su-giao-dich.component';
=======
import { KhoaHocDaMuaChiTietComponent } from './khoa-hoc-da-mua/khoa-hoc-da-mua-chi-tiet/khoa-hoc-da-mua-chi-tiet.component';
>>>>>>> master
import { KhoaHocDaMuaComponent } from './khoa-hoc-da-mua/khoa-hoc-da-mua.component';
import { DangKyXemSauComponent } from './dang-ky-xem-sau/dang-ky-xem-sau.component';
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
        },
        {
          path: 'dang-ky-xem-sau',
          component: DangKyXemSauComponent
        },
        {
          path: 'khoa-hoc-da-mua' ,
          component: KhoaHocDaMuaComponent
<<<<<<< HEAD
        },
        {
          path: 'lich-su-giao-dich',
          component: LichSuGiaoDichComponent
=======
        }, {
          path: 'khoa-hoc-da-mua-chi-tiet',
          component: KhoaHocDaMuaChiTietComponent
>>>>>>> master
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiDungRoutingModule {}
