import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-thong-ke-theo-chu-de',
  templateUrl: './thong-ke-theo-chu-de.component.html',
  styleUrls: ['./thong-ke-theo-chu-de.component.css']
})
export class ThongKeTheoChuDeComponent implements OnInit {
  data: any;
  mocktest: any = {};
  listColor:  any =  [
    '#FF6384',
    '#4BC0C0',
    '#FFCE56',
    '#E7E9ED',
    '#d520a5',
    '#00aecd',
    '#3c763d',
    '#337ab7',
    '#8a6d3b',
    '#333'
];
listTopics:  any  = [];
listTopicsValue: any  = [] ;
// listTopics:  any =  [
//     '#FF6384 ----------',
//     '#4BC0C0 ----------',
//     '#FFCE56 ----------',
//     '#E7E9ED ----------',
//     '#d520a5 ----------',
//     '#00aecd ----------',
//     '#3c763d',
//     '#337ab7',
//     '#8a6d3b',
//     '#333'
// ];
  ngOnInit(): void {
      this.mocktest.data =
      [
      {name: 'Chủ đề 1' , value: 11},
      {name: 'Chủ đề 2' , value: 21},
      {name: 'Chủ đề 3' , value: 31},
      {name: 'Chủ đề 4' , value: 15},
      {name: 'Chủ đề 5' , value: 9},
      {name: 'Chủ đề 6' , value: 25},
      {name: 'Chủ đề 7' , value: 27},
      {name: 'Chủ đề 8' , value: 29},
      {name: 'Chủ đề 9' , value: 8},
      {name: 'Còn lại' , value: 28}] ;
      console.log(this.mocktest.data);
      for ( let i = 0 ; i < this.mocktest.data.length ; i++ ) {
        this.listTopics[i] = this.mocktest.data[i].name;
        this.listTopicsValue[i] = this.mocktest.data[i].value;
      }
      this.data = {
        datasets: [{
            data: this.listTopicsValue,
            backgroundColor: this.listColor,
            label: 'My dataset'
        }],
        labels: this.listTopics
    };
    }
      constructor() {
      }
  }
