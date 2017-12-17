import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: '', component: AdminMainComponent,
  children: [
   {
    path: 'prestashop', loadChildren: './components/prestashop/prestashop.module#PrestashopModule'
    }
   ]
   }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }