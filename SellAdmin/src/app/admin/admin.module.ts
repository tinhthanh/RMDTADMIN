import { AuthenticationService } from './_services/AuthenticationService';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        AdminRoutingModule
    ],
    exports: [],
    declarations: [AdminMainComponent] ,
    providers: [
    ],
})
export class AdminModule { }
