import { Message } from './../../../../components/common/message';
import { AuthGuard } from './../../../_guards/AuthGuard';
import { Router, CanActivate } from '@angular/router';
import { ConfigValue } from './../../../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'danh-sach-chu-de-2.component.html'
})
export class DanhSachChuDe2Component implements OnInit {
    page = 1; // trang mac dinh
    size = 10; // so chu de moi trang mac dinh
    totalRecords = 0; // tong so chu de
    listTopic2: any = []; // danh sach chu de
    topic2: any = {}; // chu de hien tai
    message: Message[] = []; // danh sach tin nhan
    displayDialogTopic = false; // hien thi hop thoai
    dialogHeader = 'Sửa chủ đề';
    newTopic = false; // tao chu de moi

    constructor(
        private httpClient: HttpClient,
        private config: ConfigValue,
        private router: Router,
        private authGuard: AuthGuard,
    ) { }

    ngOnInit() {
        this.getAllTopic(); // lay danh sach chu de
    }

    saveTopic(): void {
        if (this.topic2.topicName && this.topic2.topicDescription && this.topic2.topicStatus) {
            if (this.topic2.topicStatus === '1' || this.topic2.topicStatus === '0') {
                if (this.newTopic) {
                    this.httpClient.post(this.config.url_port + `/admin/topic`, this.topic2).subscribe(
                        (data: any) => {
                            this.message = [];
                            this.listTopic2.push(data);
                            this.message.push({severity: 'Success', summary: 'Thêm thành công'});
                            console.log('Added');
                            this.displayDialogTopic = false;
                            this.getAllTopic();
                        });
                }else {
                    this.httpClient.patch(this.config.url_port + `/admin/topic`, this.topic2).subscribe(
                        (data: any) => {
                            this.message = [];
                            this.listTopic2.push(data);
                            this.message.push({severity: 'Success', summary: 'Sửa thành công'});
                            console.log('edited');
                            this.displayDialogTopic = false;
                            this.getAllTopic();
                        });
                }
            } else {
                this.message = [];
                this.message.push({severity: 'Failed', summary: 'Sửa thất bại!', detail: 'Trạng thái phải là 0 hoặc 1'});
                console.log('Trạng thái phải là 0 hoặc 1');
            }
        }else {
            this.message = [];
            this.message.push({severity: 'Failed', summary: 'Sửa thất bại!', detail: 'Không được bỏ trống trường'});
            console.log('Không được bỏ trống trường');
        }
    }

    showDialogToAdd(): void {
        this.newTopic = true;
        this.dialogHeader = 'Tạo chủ đề';
        this.topic2 = {};
        this.displayDialogTopic = true;
    }

    editTopic(event): void {
        this.displayDialogTopic = true;
        this.newTopic = false;
        this.topic2 = this.cloneTopic(event);
    }

    cloneTopic(topic2: any): any {
        const temp: any = {};
        temp.topicID = topic2.topicID;
        temp.topicName = topic2.topicName;
        temp.topicDescription = topic2.topicDescription;
        temp.topicStatus = topic2.topicStatus;
        return temp;
    }

    paginate(event): void {
        this.page = event.page + 1;
        this.size = event.rows;
        this.getAllTopic();
    }

    getAllTopic(): void {
        this.httpClient.get(this.config.url_port + `/admin/topic?page=${this.page}&size=${this.size}`).subscribe(
            (data: any) => {
            this.listTopic2 = data.listOfResult ;
            this.totalRecords = data.numberOfRecord;
            console.log(this.page);
            console.log(this.size);
            console.log(this.listTopic2);
            });
    }
}
