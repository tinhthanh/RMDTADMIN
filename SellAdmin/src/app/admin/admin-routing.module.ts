import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: '', component: AdminMainComponent,
  children: [
   {
    path: 'prestashop', loadChildren: './components/prestashop/prestashop.module#PrestashopModule'
    },
    { path: 'khoa-hoc', loadChildren: './components/khoa-hoc/khoa-hoc.module#KhoaHocModule'},
    { path: 'chu-de', loadChildren: './components/chu-de/chu-de.module#ChuDeModule'},
    {
      path: 'mau-demo', loadChildren: './components/mau-demo/mau-demo.module#MauDemoModule'
    }
   ]
   }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }