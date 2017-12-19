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
        CodeHighlighterModule
    ],
    exports: [],
    declarations: [KhoaHocComponent, ThemKhoaHocComponent],
    providers: [],
})
export class KhoaHocModule { }
