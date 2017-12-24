import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigValue } from 'app/admin/_helpers/config-value';

@Component({
  templateUrl: 'danh-sach-nguoi-dung.component.html'
})
export class DanhSachNguoiDungComponent implements OnInit {
  display = false;
  rows = 10;
  pages = 1;
  toltalRow = 100;
  listNguoiDung: any = [] ;
   public selectedNguoiDung: any ;
    constructor(private http: HttpClient, private config: ConfigValue) {}

  ngOnInit() {
    this.loadTopic();
  }
  paginate(event) {
    // event.first = Index of the first record
    this.rows = event.rows;
    this.pages = event.page + 1;
    this.loadTopic();
    // event.pageCount = Total number of pages
  }
  public loadTopic(): void {
    this.http
      .get(
        this.config.url_port +
          `/users/topic?page=${this.pages}&size=${this.rows}`
      )
      .subscribe((data: any) => {
        this.toltalRow = data.numberOfRecord;
        console.log(data);
        this.listNguoiDung = data.listOfResult;
      });
  }
  suKienChon($event) {
    console.log($event);
    this.selectedNguoiDung = $event.data;
    this.display = true;
  }
}
