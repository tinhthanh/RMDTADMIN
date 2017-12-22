import { LazyLoadEvent } from './../../../../components/common/lazyloadevent';
import { CarService } from './../../../../showcase/service/carservice';
import { Car } from './../../../../showcase/domain/car';

import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: 'danh-sach-khoa-hoc.component.html',
})
export class DanhSachKhoaHocComponent implements OnInit {
    datasource: Car[];
    cars: Car[];
    cars2: Car[];
    totalRecords: number;
    constructor(private carService: CarService) { }
    ngOnInit() {
        this.carService.getCarsLarge().then(cars => {
            this.datasource = cars;
            this.totalRecords = this.datasource.length;
            this.cars = this.datasource.slice(0, 10);
        });
        // this.carService.getCarsLarge().then(cars => {
        //     this.datasource = cars;
        //     this.totalRecords = this.datasource.length;
        //     this.cars2 = this.datasource.slice(10, 20);
        // });
    }
    // loadCarsLazy(event: LazyLoadEvent) {
    //     setTimeout(() => {
    //         if (this.datasource) {
    //             this.cars = this.datasource.slice(event.first, (event.first + event.rows));
    //         }
    //     }, 250);
    // }
    paginate(event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        console.log(event.page);
        console.log(event);
        this.cars = this.cars2;
    }
    changeSort(event) {
        console.log(event);
        if ( event.field  === 'year') {
            console.log('ss');
          this.cars =  this.cars.sort( (obj1 , obj2) => {
                return  (event.order === 1) ? ( obj1.year - obj2.year) : (obj2.year - obj1.year);
            } );
        }
       console.log(this.cars);
    }

}
