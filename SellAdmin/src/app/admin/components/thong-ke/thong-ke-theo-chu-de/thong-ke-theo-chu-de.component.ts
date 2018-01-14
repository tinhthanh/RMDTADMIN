import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-thong-ke-theo-chu-de',
  templateUrl: './thong-ke-theo-chu-de.component.html',
  styleUrls: ['./thong-ke-theo-chu-de.component.css']
})
export class ThongKeTheoChuDeComponent implements OnInit {
  data: any;
  ngOnInit(): void {
  }
      constructor() {
          this.data = {
              labels: ['A' , 'B' , 'C'],
              datasets: [
                  {
                      data: [300, 50, 100],
                      backgroundColor: [
                          '#FF6384',
                          '#36A2EB',
                          '#FFCE56'
                      ],
                      hoverBackgroundColor: [
                          '#FF6384',
                          '#36A2EB',
                          '#FFCE56'
                      ]
                  }]
              };
      }
}
