import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'nguoi-dung.component.html'
})

export class NguoiDungComponent implements OnInit {
  constructor(private router: Router) {
     this.router.navigate(['/admin/nguoi-dung/danh-sach-nguoi-dung']);
  }

  ngOnInit() {

  }
}
