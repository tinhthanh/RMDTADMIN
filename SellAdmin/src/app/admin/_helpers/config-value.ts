import { Injectable } from '@angular/core';

@Injectable()
export class ConfigValue {
     cart = 'cart';
     role_admin = 'ROLE_ADMIN';
     role_user = 'ROLE_USER';
     token = 'token';
      url_port =  'http://127.0.0.1:80'; // chế độ thật
    // url_port = 'http://10.5.50.74:8080';
     remember = 'remember';
}
