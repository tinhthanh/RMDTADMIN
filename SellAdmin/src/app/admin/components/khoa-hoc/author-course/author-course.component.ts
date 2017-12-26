import { element } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from '@angular/router';
import { Chapter } from './../../../_models/Chapter';
import { ConfigValue } from './../../../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { NodeService } from './../../../../showcase/service/nodeservice';
import { MenuItem } from './../../../../components/common/menuitem';
import { TreeNode } from './../../../../components/common/treenode';
import { Tree } from './../../../../components/tree/tree';
import { Message, SelectItem } from 'app/components/common/api';
import { TreeDragDropService } from './../../../../components/common/treedragdropservice';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
import { Course, Lesson, FileOfLesson } from 'app/admin/_models';
import { APP_BASE_HREF } from '@angular/common';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: 'author-course.component.html',
    styles: [`
    h4 {
        text-align: center;
        margin: 0 0 8px 0;
    }
`],
    styleUrls: ['author-course.component.css'],
    providers: [TreeDragDropService]
})

export class AuthorCourseComponent implements OnInit {
    url_upload: string;
    // khoa hoc
    selectFile: FileOfLesson;
    khoahoc: Course;
    msgs: Message[];
    @ViewChild('expandingTree')
    expandingTree: Tree;
    filesTree11: TreeNode[];
    selectedFile3: TreeNode;
    items: MenuItem[];

    visibleEditFile;
    visibleCource;
    visibleChater;
    uploadedFiles: any[] = [];

    // tao khoa học
    userform: FormGroup;
  // tao chương mục
   chapterForm: FormGroup ;

    courseTypeID: SelectItem[];
    submitted: boolean;
    topicID: SelectItem[];
    description: string;
    sourceDetail = '';
    courseAvatar_temp: string; // hinh anh khoa hoc
    uploadImgProress = false; // hiển thị đang upload
    listCharter: any = [];
    constructor(private nodeService: NodeService
        , private http: HttpClient,
        private config: ConfigValue,
        private router: Router,
        private fb: FormBuilder) { }
    ngOnInit() {
        this.url_upload = this.config.url_port;
        this.loadingCource('KH1');
        // this.loading = true;
        console.log(this.router);
    }
    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
        // data
        const dataSend: any = {} ;
        dataSend.courseAvatar = this.courseAvatar_temp ;
        dataSend.courseDescription = this.userform.value.courseDescription ;
        dataSend.courseDetail = this.userform.value.courseDetail ;
        dataSend.courseID =  this.khoahoc.courseID ;
        dataSend.courseTitle = this.userform.value.courseTitle ;
        dataSend.courseTypeID = this.userform.value.courseTypeID ;
        dataSend.price =  (this.userform.value.courseTypeID === 'CO' ) ? this.userform.value.price : 0  ;
        dataSend.status = this.userform.value.status ;
        dataSend.topicID = this.userform.value.topicID ;
        this.http.patch( `${this.config.url_port}/user/course`, dataSend ).subscribe(
            (data: any ) => {
                this.khoahoc = data ;
                this.visibleCource = false;
                this.submitted = false;
            }, ( err: HttpErrorResponse ) => {
                 if ( err.status === 401  ) {
                    alert('token hết hạng ') ;
                }
                if ( err.status === 405 ) {
                    alert( ' sai logic ');
                }
                console.log('erro');
            }
        );
    }
    public initFormChapter() {
        const  chapterForm = new FormGroup({
            courseID: new FormControl(this.khoahoc.courseID),
            chapterTitle: new FormControl('' , Validators.required),
            chapterContent : new FormControl('' , Validators.required ),
            chapterSummary : new FormControl('' , Validators.required)
        });
        this.chapterForm = chapterForm ;
    }
    public initForm() {
        // tslint:disable-next-line:max-line-length
        this.khoahoc.courseAvatar = this.khoahoc.courseAvatar ? this.khoahoc.courseAvatar : 'https://www.caperlan.co.uk/sites/caperlan/files/styles/460x460/public/default_images/no-picture.png';
        this.courseAvatar_temp = this.khoahoc.courseAvatar ;
        console.log(this.khoahoc.courseAvatar);
        this.userform = this.fb.group({
            courseTitle: new FormControl(this.khoahoc.courseTitle, Validators.required),
            courseDescription: new FormControl(this.khoahoc.courseDescription, Validators.required),
            price: new FormControl(this.khoahoc.price, [Validators.required, Validators.maxLength(7)]),
            courseTypeID: new FormControl(this.khoahoc.courseType.courseTypeID),
            topicID: new FormControl(this.khoahoc.topic.topicID, Validators.required),
            courseAvatar: new FormControl(this.khoahoc.courseAvatar),
            courseDetail: new FormControl(this.khoahoc.courseDetail),
            status: new FormControl(this.khoahoc.status)
        });
        this.courseTypeID = [];
        this.courseTypeID.push({ label: 'Chọn loại khóa học', value: '' });
        this.courseTypeID.push({ label: 'Miễn phí', value: 'NCO' });
        this.courseTypeID.push({ label: 'Có phí', value: 'CO' });
        // loading lên nha nha thắng
        this.topicID = [];
        this.topicID.push({ label: this.khoahoc.topic.topicName, value: this.khoahoc.topic.topicID });
        this.http.get(`${this.config.url_port}/users/topic?page=1&size=99999`).subscribe(
            (data: any) => {
                console.log(data);
                const dsChuDe = data.listOfResult;
                for (const temp of dsChuDe) {
                    this.topicID.push({ label: temp.topicName, value: temp.topicID });
                }
            }, (err: HttpErrorResponse) => {
                alert('erro Không load được danh sách chủ đề');
            }
        );
    }
    nodeSelect(event) {
        // thêm file vào bài học
        if (event.node.data instanceof FileOfLesson) {
            this.selectFile = event.node.data;
            this.visibleEditFile = true;
        }
        // xem chi tiết khóa học
        if (event.node.data.courseID && event.node.data.courseTitle) {
            const filesTree11 = [...this.filesTree11];
            this.visibleCource = true;
            // this.userform.
            //  filesTree11[0].label =  'HUYNH TINH THANH';

            this.filesTree11 = filesTree11;
        }
        if (event.node.data.courseID && event.node.data.chapterID) {
            console.log('chater');
        }
        if (event.node.data.chapterID && event.node.data.lessonID) {
            console.log('lessonID');
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }
    public  clickThemChuongMuc() {
        this.initFormChapter();
        console.log(this.chapterForm.value) ;
        this.visibleCource = false ;
        this.visibleChater = true;
        // console.log('them chuong muc');
    }
    public themChuongMuc() {
        this.submitted = true;
        this.http.post('/users/course' , this.chapterForm.value ).subscribe(
            (data: any ) => {
             const listCharter =   this.listCharter ;
             listCharter.push(data);
             const filesTree11 = [...this.filesTree11];
             // deo biet tai sao khong builing
             const node: TreeNode = {};
             node.label = data.chapterTitle ;
             node.data = data;
             node.expandedIcon = 'fa fa-file-text';
             node.collapsedIcon = 'fa fa-file-text-o';
             filesTree11[0].children.push(node);
             this.filesTree11 = filesTree11;
             this.listCharter = listCharter;
                console.log(data);
                this.submitted = false;
                 this.visibleChater = false;
            }
        );
        console.log(this.chapterForm.value);
    }
    public clickXoaChuong($event): void {
        const listCharter = [...this.listCharter] ;
        for ( let i = 0 ; i < listCharter.length ; i++ ) {
            if ( listCharter[i].chapterID === $event.chapterID ) {
                listCharter.splice(i , 1 );
            }
        }
        this.listCharter = listCharter;
        const filesTree11 = [...this.filesTree11];
        for (let i = 0; i < filesTree11[0].children.length; i++) {
            if (   filesTree11[0].children[i].data.chapterID === $event.chapterID  ) {
                filesTree11[0].children.splice(i, 1);
            }
            // for (let j = 0; j < filesTree11[0].children[i].children.length; j++) {
            //     for (let k = 0; k < filesTree11[0].children[i].children[j].children.length; k++) {
            //         if (this.selectFile.maBaiHoc === filesTree11[0].children[i].children[j].children[k].data.maBaiHoc) {
            //             filesTree11[0].children[i].children[j].children.splice(k, 1);
            //         }
            //     }
            // }
        }
        this.filesTree11 = filesTree11;
    }
    public clickXoaFile(): void {
        this.visibleEditFile = false;
        this.xoaFile();
    }
    public xoaFile(): void {
        const filesTree11 = [...this.filesTree11];
        // deo biet tai sao khong builing
        for (let i = 0; i < filesTree11[0].children.length; i++) {
            for (let j = 0; j < filesTree11[0].children[i].children.length; j++) {
                for (let k = 0; k < filesTree11[0].children[i].children[j].children.length; k++) {
                    if (this.selectFile.maBaiHoc === filesTree11[0].children[i].children[j].children[k].data.maBaiHoc) {
                        filesTree11[0].children[i].children[j].children.splice(k, 1);
                    }
                }
            }
        }
        this.filesTree11 = filesTree11;
    }
    expandAll() {
        this.filesTree11.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.filesTree11.forEach(node => {
            this.expandRecursive(node, false);
        });
    }
    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
    // upload hinh anh khoa hoc
    onBasicUploadAuto($event) {
        const response = JSON.parse($event.xhr.response);
        const obj = response;
        const auth = JSON.parse(obj[0].fileProperties);
        const url = `https://drive.google.com/uc?id=${auth.id}`;
        this.courseAvatar_temp = url;
        const userform = this.userform ;
        userform.value.courseAvatar = url;
        this.userform = userform ;
        const khoahoc = this.khoahoc ;
        khoahoc.courseAvatar = url;
        this.khoahoc = khoahoc;
        this.uploadImgProress = false;
    }
    onUpload(event) {
        this.uploadImgProress = false;
        console.log(JSON.parse(event.xhr.response));
        for (const file of event.files) {
            // this.uploadedFiles.push(file);
            console.log(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }
    progressUp($event) {
        this.uploadImgProress = true;
        console.log($event);
    }
    erroUpload($event) {
        alert('thử lại');
        if ($event.xhr.status === 401) {
            console.log(' token hết hạng ');
        }
    }
    public loadingCource(code: string): void {
        const listNode: TreeNode[] = [];
        this.http.get(this.config.url_port + `/users/course/${code}`).subscribe((data: Course) => {
            this.khoahoc = data;
            this.initForm();
            // lấy danh sách chapter
            this.http.get(this.config.url_port + `/users/course/${this.khoahoc.courseID}/chapter`).subscribe(
                (chapter: any[]) => {
<<<<<<< HEAD
                    console.log(chapter);
                    for ( let i  = 0 ; i < chapter.length ; i++) {
                        const node: TreeNode  = {};
                        node.label =  chapter[i].chapterTitle.substring(0, 30)  ;
                        node.data  = chapter[i];
                        node.expandedIcon = 'fa-folder-open';
                        node.collapsedIcon = 'fa-folder';
                        const danhSachBaiHoc: Lesson[] = chapter[i].listOfLesson ;
=======
                    this.listCharter = chapter ;
                    for (let i = 0; i < chapter.length; i++) {
                        const node: TreeNode = {};
                        node.label = chapter[i].chapterTitle;
                        node.data = chapter[i];
                        node.expandedIcon = 'fa fa-file-text';
                        node.collapsedIcon = 'fa fa-file-text-o';
                        const danhSachBaiHoc: Lesson[] = chapter[i].listOfLesson;
>>>>>>> master
                        const nodeBaiHoc: TreeNode[] = [];
                        for (let j = 0; j < danhSachBaiHoc.length; j++) {
                            const baihoc: TreeNode = {};
                            baihoc.label = danhSachBaiHoc[j].lessonTitle;
                            baihoc.data = danhSachBaiHoc[j];
                            baihoc.expandedIcon = 'fa fa-file-text';
                            baihoc.collapsedIcon = 'fa fa-file-text-o';
                            // radmon file
                            const lengtSize = Math.floor(Math.random() * 4) + 1;
                            const listFileOfLesson: FileOfLesson[] = [];
                            for (let k = 0; k < lengtSize; k++) {
                                const fileOfLesson = new FileOfLesson();
                                fileOfLesson.maBaiHoc = `MA-${Math.floor(Math.random() * 99999)}`;
                                // tslint:disable-next-line:max-line-length
                                fileOfLesson.noiDung = `file-${Math.floor(Math.random() * 99999)}-doc${Math.floor(Math.random() * 99999)}.docx`;
                                listFileOfLesson.push(fileOfLesson);
                            }
                            const listNodeFile: TreeNode[] = [];
                            for (let k = 0; k < listFileOfLesson.length; k++) {
                                const file: TreeNode = {};
                                file.label = listFileOfLesson[k].noiDung;
                                file.data = listFileOfLesson[k];
                                file.icon = 'fa-file-word-o';
                                listNodeFile.push(file);
                            }
                            baihoc.children = listNodeFile;
                            nodeBaiHoc.push(baihoc);
                        }
                        node.children = nodeBaiHoc;
                        listNode.push(node);
                    }
                    this.filesTree11 = [{
                        label: this.khoahoc.courseTitle,
                        data: this.khoahoc,
                        children: listNode
                    }];
                }
            );
        });
    }
}
