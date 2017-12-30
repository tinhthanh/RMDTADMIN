import { LichSuGiaoDichComponent } from './lich-su-giao-dich/lich-su-giao-dich.component';
import { KhoaHocDaMuaComponent } from './khoa-hoc-da-mua/khoa-hoc-da-mua.component';
import { FieldsetModule } from './../../../components/fieldset/fieldset';
import { ConfirmationService } from './../../../components/common/confirmationservice';
import { ConfirmDialogModule } from './../../../components/confirmdialog/confirmdialog';
import { ProgressBarModule } from './../../../components/progressbar/progressbar';
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
import { DangKyXemSauComponent } from 'app/admin/components/nguoi-dung/dang-ky-xem-sau/dang-ky-xem-sau.component';
import { InplaceModule } from 'app/components/inplace/inplace';

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

    ProgressBarModule,
    ConfirmDialogModule,
    InplaceModule,
    FieldsetModule
  ],
  exports: [],
  declarations: [
    DanhSachNguoiDungComponent,
    NguoiDungComponent,
    DangKyXemSauComponent,
    KhoaHocDaMuaComponent,
    LichSuGiaoDichComponent
  ],
  providers: [
    ConfirmationService
  ],
})
export class NguoiDungModule { }
