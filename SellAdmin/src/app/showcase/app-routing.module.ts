import { AuthGuard } from './../admin/_guards/AuthGuard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
    {
       path: 'pages',
       loadChildren: '../admin//components/pages/pages.module#PagesModule'
     },
    {
        path: '', component: AdminComponent,
        children: [

            {path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
            {path: 'setup', loadChildren: './components/setup/setup.module#SetupModule'},
            {path: 'theming', loadChildren: './components/theming/theming.module#ThemingModule'},
            {path: 'accordion', loadChildren: './components/accordion/accordiondemo.module#AccordionDemoModule'},
            {path: 'autocomplete', loadChildren: './components/autocomplete/autocompletedemo.module#AutoCompleteDemoModule'},
            {path: 'blockui', loadChildren: './components/blockui/blockuidemo.module#BlockUIDemoModule'},
            {path: 'breadcrumb', loadChildren: './components/breadcrumb/breadcrumbdemo.module#BreadcrumbDemoModule'},
            {path: 'button', loadChildren: './components/button/buttondemo.module#ButtonDemoModule'},
            {path: 'calendar', loadChildren: './components/calendar/calendardemo.module#CalendarDemoModule'},
            {path: 'captcha', loadChildren: './components/captcha/captchademo.module#CaptchaDemoModule'},
            {path: 'carousel', loadChildren: './components/carousel/carouseldemo.module#CarouselDemoModule'},
            {path: 'chart', loadChildren: './components/chart/chartdemo.module#ChartDemoModule'},
            {path: 'checkbox', loadChildren: './components/checkbox/checkboxdemo.module#CheckboxDemoModule'},
            {path: 'chips', loadChildren: './components/chips/chipsdemo.module#ChipsDemoModule'},
            {path: 'codehighlighter', loadChildren: './components/codehighlighter/codehighlighterdemo.module#CodeHighlighterDemoModule'},
            {path: 'colorpicker', loadChildren: './components/colorpicker/colorpickerdemo.module#ColorPickerDemoModule'},
            {path: 'confirmdialog', loadChildren: './components/confirmdialog/confirmdialogdemo.module#ConfirmDialogDemoModule'},
            {path: 'contextmenu', loadChildren: './components/contextmenu/contextmenudemo.module#ContextMenuDemoModule'},
            {path: 'datagrid', loadChildren: './components/datagrid/datagriddemo.module#DataGridDemoModule'},
            {path: 'datalist', loadChildren: './components/datalist/datalistdemo.module#DataListDemoModule'},
            {path: 'datascroller', loadChildren: './components/datascroller/datascrollerdemo.module#DataScrollerDemoModule'},
            {path: 'datatable', loadChildren: './components/datatable/datatabledemo.module#DataTableDemoModule'},
            {path: 'defer', loadChildren: './components/defer/deferdemo.module#DeferDemoModule'},
            {path: 'dialog', loadChildren: './components/dialog/dialogdemo.module#DialogDemoModule'},
            {path: 'dragdrop', loadChildren: './components/dragdrop/dragdropdemo.module#DragDropDemoModule'},
            {path: 'dropdown', loadChildren: './components/dropdown/dropdowndemo.module#DropdownDemoModule'},
            {path: 'editor', loadChildren: './components/editor/editordemo.module#EditorDemoModule'},
            {path: 'fieldset', loadChildren: './components/fieldset/fieldsetdemo.module#FieldsetDemoModule'},
            {path: 'fileupload', loadChildren: './components/fileupload/fileuploaddemo.module#FileUploadDemoModule'},
            {path: 'galleria', loadChildren: './components/galleria/galleriademo.module#GalleriaDemoModule'},
            {path: 'gmap', loadChildren: './components/gmap/gmapdemo.module#GMapDemoModule'},
            {path: 'grid', loadChildren: './components/grid/griddemo.module#GridDemoModule'},
            {path: 'growl', loadChildren: './components/growl/growldemo.module#GrowlDemoModule'},
            {path: 'inplace', loadChildren: './components/inplace/inplacedemo.module#InplaceDemoModule'},
            {path: 'inputmask', loadChildren: './components/inputmask/inputmaskdemo.module#InputMaskDemoModule'},
            {path: 'inputswitch', loadChildren: './components/inputswitch/inputswitchdemo.module#InputSwitchDemoModule'},
            {path: 'inputtext', loadChildren: './components/inputtext/inputtextdemo.module#InputTextDemoModule'},
            {path: 'inputgroup', loadChildren: './components/inputgroup/inputgroupdemo.module#InputGroupDemoModule'},
            {path: 'inputtextarea', loadChildren: './components/inputtextarea/inputtextareademo.module#InputTextareaDemoModule'},
            {path: 'lightbox', loadChildren: './components/lightbox/lightboxdemo.module#LightboxDemoModule'},
            {path: 'listbox', loadChildren: './components/listbox/listboxdemo.module#ListboxDemoModule'},
            {path: 'megamenu', loadChildren: './components/megamenu/megamenudemo.module#MegaMenuDemoModule'},
            {path: 'menu', loadChildren: './components/menu/menudemo.module#MenuDemoModule'},
            {path: 'menubar', loadChildren: './components/menubar/menubardemo.module#MenubarDemoModule'},
            {path: 'menumodel', loadChildren: './components/menumodel/menumodeldemo.module#MenuModelDemoModule'},
            {path: 'messages', loadChildren: './components/messages/messagesdemo.module#MessagesDemoModule'},
            {path: 'multiselect', loadChildren: './components/multiselect/multiselectdemo.module#MultiSelectDemoModule'},
            {path: 'orderlist', loadChildren: './components/orderlist/orderlistdemo.module#OrderListDemoModule'},
            // tslint:disable-next-line:max-line-length
            {path: 'organizationchart', loadChildren: './components/organizationchart/organizationchartdemo.module#OrganizationChartDemoModule'},
            {path: 'overlaypanel', loadChildren: './components/overlaypanel/overlaypaneldemo.module#OverlayPanelDemoModule'},
            {path: 'paginator', loadChildren: './components/paginator/paginatordemo.module#PaginatorDemoModule'},
            {path: 'panel', loadChildren: './components/panel/paneldemo.module#PanelDemoModule'},
            {path: 'panelmenu', loadChildren: './components/panelmenu/panelmenudemo.module#PanelMenuDemoModule'},
            {path: 'password', loadChildren: './components/password/passworddemo.module#PasswordDemoModule'},
            {path: 'picklist', loadChildren: './components/picklist/picklistdemo.module#PickListDemoModule'},
            {path: 'progressbar', loadChildren: './components/progressbar/progressbardemo.module#ProgressBarDemoModule'},
            {path: 'progressspinner', loadChildren: './components/progressspinner/progressspinnerdemo.module#ProgressSpinnerDemoModule'},
            {path: 'radiobutton', loadChildren: './components/radiobutton/radiobuttondemo.module#RadioButtonDemoModule'},
            {path: 'rating', loadChildren: './components/rating/ratingdemo.module#RatingDemoModule'},
            {path: 'responsive', loadChildren: './components/responsive/responsivedemo.module#ResponsiveDemoModule'},
            {path: 'rtl', loadChildren: './components/rtl/rtldemo.module#RTLDemoModule'},
            {path: 'schedule', loadChildren: './components/schedule/scheduledemo.module#ScheduleDemoModule'},
            {path: 'scrollpanel', loadChildren: './components/scrollpanel/scrollpaneldemo.module#ScrollPanelDemoModule' },
            {path: 'selectbutton', loadChildren: './components/selectbutton/selectbuttondemo.module#SelectButtonDemoModule'},
            {path: 'sidebar', loadChildren: './components/sidebar/sidebardemo.module#SidebarDemoModule'},
            {path: 'slidemenu', loadChildren: './components/slidemenu/slidemenudemo.module#SlideMenuDemoModule'},
            {path: 'slider', loadChildren: './components/slider/sliderdemo.module#SliderDemoModule'},
            {path: 'spinner', loadChildren: './components/spinner/spinnerdemo.module#SpinnerDemoModule'},
            {path: 'splitbutton', loadChildren: './components/splitbutton/splitbuttondemo.module#SplitButtonDemoModule'},
            {path: 'steps', loadChildren: './components/steps/stepsdemo.module#StepsDemoModule'},
            {path: 'support', loadChildren: './components/support/support.module#SupportModule'},
            {path: 'tabmenu', loadChildren: './components/tabmenu/tabmenudemo.module#TabMenuDemoModule'},
            {path: 'tabview', loadChildren: './components/tabview/tabviewdemo.module#TabViewDemoModule'},
            {path: 'terminal', loadChildren: './components/terminal/terminaldemo.module#TerminalDemoModule'},
            {path: 'tieredmenu', loadChildren: './components/tieredmenu/tieredmenudemo.module#TieredMenuDemoModule'},
            {path: 'togglebutton', loadChildren: './components/togglebutton/togglebuttondemo.module#ToggleButtonDemoModule'},
            {path: 'toolbar', loadChildren: './components/toolbar/toolbardemo.module#ToolbarDemoModule'},
            {path: 'tooltip', loadChildren: './components/tooltip/tooltipdemo.module#TooltipDemoModule'},
            {path: 'tree', loadChildren: './components/tree/treedemo.module#TreeDemoModule'},
            {path: 'treetable', loadChildren: './components/treetable/treetabledemo.module#TreeTableDemoModule'},
            // tslint:disable-next-line:max-line-length
            {path: 'tristatecheckbox', loadChildren: './components/tristatecheckbox/tristatecheckboxdemo.module#TriStateCheckboxDemoModule'},
            {path: 'validation', loadChildren: './components/validation/validationdemo.module#ValidationDemoModule'}
        ],
        canActivate: [ AuthGuard ]
    },
] ;
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
