import { AuthenticationService } from './_services/AuthenticationService';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { NgModule } from '@angular/core';
import { MenuModule } from 'app/components/menu/menu';


@NgModule({
    imports: [
        AdminRoutingModule,
        MenuModule,
    ],
    exports: [],
    declarations: [AdminMainComponent] ,
    providers: [
    ],
})
export class AdminModule { }
