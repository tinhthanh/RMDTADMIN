import { QuanLyNguoiDungComponent } from './admin/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { KhoaHocDaMuaChiTietComponent } from './khoa-hoc-da-mua/khoa-hoc-da-mua-chi-tiet/khoa-hoc-da-mua-chi-tiet.component';
import { KhoaHocDaMuaComponent } from './khoa-hoc-da-mua/khoa-hoc-da-mua.component';
import { DangKyXemSauComponent } from './dang-ky-xem-sau/dang-ky-xem-sau.component';
import { DanhSachNguoiDungComponent } from './danh-dach-nguoi-dung/danh-sach-nguoi-dung.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NguoiDungComponent } from 'app/admin/components/nguoi-dung/nguoi-dung.component';
import { QuanLyTaiKhoanBiKhoaComponent } from './admin/quan-ly-nguoi-dung/quan-ly-tai-khoan-bi-khoa/quan-ly-tai-khoan-bi-khoa.component';
import {
  QuanLyTaiKhoanHoatDongComponent } from './admin/quan-ly-nguoi-dung/quan-ly-tai-khoan-hoat-dong/quan-ly-tai-khoan-hoat-dong.component';

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
        }, {
          path: 'khoa-hoc-da-mua-chi-tiet',
          component: KhoaHocDaMuaChiTietComponent
        }
      ]
    }, {
      path : 'quan-ly',
      component: QuanLyNguoiDungComponent,
      children: [
        {
          path: 'quan-ly-tai-khoan-bi-khoa',
          component: QuanLyTaiKhoanBiKhoaComponent
        },
        {
          path: 'quan-ly-tai-khoan-hoat-dong',
          component: QuanLyTaiKhoanHoatDongComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiDungRoutingModule {}
