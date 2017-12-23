import { SidebarModule } from './../../../components/sidebar/sidebar';
import { PaginatorModule } from './../../../components/paginator/paginator';
import { DataTableModule } from './../../../components/datatable/datatable';
import { NgModule } from '@angular/core';

import { KhoaHocComponent } from './khoa-hoc.component';
import { ThemKhoaHocComponent } from 'app/admin/components/khoa-hoc/them-khoa-hoc/them-khoa-hoc.component';
import { KhoaHocRoutingModule } from 'app/admin/components/khoa-hoc/khoa-hoc-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from 'app/components/growl/growl';
import { PanelModule } from 'app/components/panel/panel';
import { DropdownModule } from 'app/components/dropdown/dropdown';
import { InputTextModule } from 'app/components/inputtext/inputtext';
import { InputTextareaModule } from 'app/components/inputtextarea/inputtextarea';
import { ButtonModule } from 'app/components/button/button';
import { TabViewModule } from 'app/components/tabview/tabview';
import { CodeHighlighterModule } from 'app/components/codehighlighter/codehighlighter';
import { EditorModule } from 'app/components/editor/editor';
import { FileUploadModule } from 'app/components/fileupload/fileupload';
import { TrangThaiKhoaHocComponent } from 'app/admin/components/khoa-hoc/trang-thai-khoa-hoc/trang-thai-khoa-hoc.component';
import { CapNhatKhoaHocComponent } from 'app/admin/components/khoa-hoc/cap-nhat-khoa-hoc/cap-nhat-khoa-hoc.component';
import { DoiMatKhauComponent } from 'app/admin/components/khoa-hoc/doi-mat-khau/doi-mat-khau.component';
import { DanhSachKhoaHocComponent } from 'app/admin/components/khoa-hoc/danh-sach-khoa-hoc/danh-sach-khoa-hoc.component';
import { AuthorCourseComponent } from '../../components/khoa-hoc/author-course/author-course.component';
import { TreeModule } from 'app/components/tree/tree';
import { ContextMenuModule } from 'app/components/contextmenu/contextmenu';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        KhoaHocRoutingModule,
        GrowlModule,
        PanelModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        TabViewModule,
        EditorModule,
        FileUploadModule,
        CodeHighlighterModule,
        DataTableModule,
        PaginatorModule,
        TreeModule,
        ContextMenuModule,
        SidebarModule
    ],
    exports: [],
    declarations: [KhoaHocComponent, ThemKhoaHocComponent, TrangThaiKhoaHocComponent, CapNhatKhoaHocComponent, DoiMatKhauComponent
       , DanhSachKhoaHocComponent ,
       AuthorCourseComponent ],
    providers: [],
})
export class KhoaHocModule { }
