import { GrowlModule } from './../../../components/growl/growl';
import { EditorModule } from './../../../components/editor/editor';
import { ButtonModule } from 'app/components/button/button';
import { DialogModule } from './../../../components/dialog/dialog';
import { PaginatorModule } from './../../../components/paginator/paginator';
import { DataTableModule } from './../../../components/datatable/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DanhSachChuDe2Component } from './danh-sach-chu-de-2/danh-sach-chu-de-2.component';
import { ChuDe2RoutingModule } from './chu-de-2-routing.module';
import { ChuDe2Component } from './chu-de-2.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ChuDe2RoutingModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        PaginatorModule,
        DataTableModule,
        DialogModule,
        ButtonModule,
        EditorModule,
        GrowlModule
    ],
    exports: [],
    declarations: [
        ChuDe2Component,
        DanhSachChuDe2Component
    ],
    providers: [],
})
export class ChuDe2Module { }
