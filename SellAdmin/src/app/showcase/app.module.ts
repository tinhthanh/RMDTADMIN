import { AuthenticationService } from './../admin/_services/AuthenticationService';
import { AuthGuard } from './../admin/_guards/AuthGuard';
import { JwtInterceptor } from './../admin/_helpers/JwtInterceptor ';
import { ConfigValue } from './../admin/_helpers/config-value';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';
import { AdminComponent } from 'app/admin/admin.component';
import { AuthenticationRest, UserRest } from '../admin/_helpers';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      CarService, CountryService, EventService, NodeService,  ConfigValue,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      },
      AuthGuard, // chặn không cho truy cập vào trang admin
      // mocktest
      AuthenticationRest,
      UserRest,
      AuthenticationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
