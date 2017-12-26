import { ButtonModule } from 'app/components/button/button';
import { EditorModule } from 'app/components/editor/editor';
import { MultiSelectModule } from './../../../components/multiselect/multiselect';
import { DialogModule } from './../../../components/dialog/dialog';
import { DataTableModule } from './../../../components/datatable/datatable';
import { PaginatorModule } from './../../../components/paginator/paginator';
import { NgModule } from '@angular/core';
import { NguoiDungComponent } from 'app/admin/components/nguoi-dung/nguoi-dung.component';
import { DanhSachNguoiDungComponent } from 'app/admin/components/nguoi-dung/danh-dach-nguoi-dung/danh-sach-nguoi-dung.component';
import { CommonModule } from '@angular/common';
import { NguoiDungRoutingModule } from 'app/admin/components/nguoi-dung/nguoi-dung-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from 'app/components/growl/growl';

@NgModule({
  imports: [
    PaginatorModule,
    DataTableModule,
    DialogModule,
    NguoiDungRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    , MultiSelectModule,
    EditorModule,
    ButtonModule,
    GrowlModule,
  ],
  exports: [],
  declarations: [DanhSachNguoiDungComponent, NguoiDungComponent],
  providers: [],
})
export class NguoiDungModule { }
