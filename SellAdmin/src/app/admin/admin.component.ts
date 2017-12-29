import { MenuItem } from './../components/common/menuitem';
import { MenuModule } from 'app/components/menu/menu';

import { User } from './_models/User';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/admin/_services/AuthenticationService';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
    public user: User;
    activeMenuId: string;
    menuActive: boolean;
    development = false;
    constructor(
        private auth: AuthenticationService,
        private router: Router ) { }

    ngOnInit() {
 this.auth.getInformation().subscribe(data => {
    console.log(data);
     this.user =  data;
    }, (err: HttpErrorResponse) => {
        if ( err.status  === 403 ) {
            console.log('tài khoãn không chính xác');
        }
        if ( err.status === 401 ) {
             console.log(' token hết hạng');
        }
        this.router.navigate(['/pages/dang-nhap']);
    });
    }
    public logout(): void {
        this.auth.logout();
        this.router.navigate(['/pages/dang-nhap']);
    }
    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }
}
