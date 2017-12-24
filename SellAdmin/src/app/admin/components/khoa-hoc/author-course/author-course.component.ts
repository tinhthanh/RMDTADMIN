import { Chapter } from './../../../_models/Chapter';
import { ConfigValue } from './../../../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { NodeService } from './../../../../showcase/service/nodeservice';
import { MenuItem } from './../../../../components/common/menuitem';
import { TreeNode } from './../../../../components/common/treenode';
import { Tree } from './../../../../components/tree/tree';
import { Message } from 'app/components/common/api';
import { TreeDragDropService } from './../../../../components/common/treedragdropservice';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
import { Course, Lesson, FileOfLesson } from 'app/admin/_models';
import { APP_BASE_HREF } from '@angular/common';

@Component({
    templateUrl: 'author-course.component.html',
      styles: [`
    h4 {
        text-align: center;
        margin: 0 0 8px 0;
    }
`],
providers: [TreeDragDropService]
})

export class AuthorCourseComponent implements OnInit {
     // khoa hoc
    selectFile:  FileOfLesson ;
     khoahoc: Course;
     msgs: Message[];
        @ViewChild('expandingTree')
        expandingTree: Tree;
        filesTree11: TreeNode[];
        selectedFile3: TreeNode;
        items: MenuItem[];
        loading: boolean;

        visibleEditFile;
        visibleSidebar5;
        uploadedFiles: any[] = [];
    constructor(private nodeService: NodeService
     , private http: HttpClient,
    private config: ConfigValue) { }
    ngOnInit() {
      this.loadingCource('KH1');
        this.loading = true;
    }
    nodeSelect(event) {
        console.log(event.node.data);
        if ( event.node.data instanceof FileOfLesson) {
            this.selectFile = event.node.data ;
            this.visibleEditFile = true;
        }
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }
    public clickXoaFile(): void {
        this.visibleEditFile = false;
        this.xoaFile();
    }
    public xoaFile(): void {
        const filesTree11 = [...this.filesTree11];
        // deo biet tai sao khong builing
         for ( let i = 0 ; i < filesTree11[0].children.length ; i++) {
            for ( let j = 0 ; j  < filesTree11[0].children[i].children.length ; j++) {
                for (let k = 0 ; k < filesTree11[0].children[i].children[j].children.length ; k++) {
                    console.log(filesTree11[0].children[i].children[j].children[k].data.maBaiHoc);
                   if ( this.selectFile.maBaiHoc === filesTree11[0].children[i].children[j].children[k].data.maBaiHoc) {
                        // filesTree11[0].children[i].children[j].children[k].label = 'tao la t khong bit';
                        filesTree11[0].children[i].children[j].children.splice(k , 1);
                   }
                }
            }
         }
            this.filesTree11 = filesTree11;
    }
    expandAll() {
        this.filesTree11.forEach( node => {
            this.expandRecursive(node, true);
        } );
    }

    collapseAll() {
        this.filesTree11.forEach( node => {
            this.expandRecursive(node, false);
        } );
    }
    private expandRecursive(node: TreeNode, isExpand: boolean ) {
        node.expanded = isExpand;
        if ( node.children ) {
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }
    onUpload(event) {
        console.log(event.xhr.response);
        for (const file of event.files) {
            // this.uploadedFiles.push(file);
            console.log(file);
        }
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
     getFiles(): any {
    return this.http.get('http://localhost:8087/getallfiles').subscribe(data => {
            console.log(data);
    });
  }
    public loadingCource(code: string ): void {
        const listNode: TreeNode[] = [];
        this.http.get(this.config.url_port + '/users/course/KH1').subscribe( ( data: Course ) => {
            this.khoahoc = data;
            // lấy danh sách chapter
            this.http.get(this.config.url_port + `/users/course/${this.khoahoc.courseID}/chapter`).subscribe(
                (chapter: any[]) => {
                    console.log(chapter);
                    for ( let i  = 0 ; i < chapter.length ; i++) {
                        const node: TreeNode  = {};
                        node.label =  chapter[i].chapterTitle.substring(0, 30)  ;
                        node.data  = chapter[i];
                        node.expandedIcon = 'fa-folder-open';
                        node.collapsedIcon = 'fa-folder';
                        const danhSachBaiHoc: Lesson[] = chapter[i].listOfLesson ;
                        const nodeBaiHoc: TreeNode[] = [];
                        for ( let j = 0 ; j <  danhSachBaiHoc.length; j++) {
                            const baihoc: TreeNode  = {};
                            baihoc.label =  danhSachBaiHoc[j].lessonTitle;
                            baihoc.data  =  danhSachBaiHoc[j];
                            baihoc.expandedIcon = 'fa-folder-open';
                            baihoc.collapsedIcon = 'fa-folder';
                            // radmon file
                            const lengtSize = Math.floor(Math.random() * 4) + 1 ;
                            const listFileOfLesson: FileOfLesson[] = [];
                            for ( let k  = 0 ; k < lengtSize ; k++ ) {
                             const fileOfLesson  = new FileOfLesson();
                            fileOfLesson.maBaiHoc =   `MA-${Math.floor(Math.random() * 99999)}`;
                            fileOfLesson.noiDung = `file-${Math.floor(Math.random() * 99999)}-doc${Math.floor(Math.random() * 99999)}.docx`;
                            listFileOfLesson.push(fileOfLesson);
                            }
                            const listNodeFile: TreeNode[] = [];
                            for ( let k  = 0 ; k < listFileOfLesson.length ;  k++) {
                                const file: TreeNode  = {};
                                file.label = listFileOfLesson[k].noiDung;
                                file.data  =  listFileOfLesson[k];
                                file.icon =   'fa-file-word-o';
                                listNodeFile.push(file);
                            }
                            baihoc.children = listNodeFile;
                            nodeBaiHoc.push(baihoc);
                        }
                        node.children =  nodeBaiHoc ;
                        listNode.push(node);
                    }
                    this.filesTree11 = [{
                        label: this.khoahoc.courseTitle ,
                        children: listNode
                    }];
                }
            );
        });
    }
}
