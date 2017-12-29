import { Injectable } from '@angular/core';

@Injectable()
export class ConfigValue {
     cart = 'cart';
     role_admin = 'ROLE_ADMIN';
     role_user = 'ROLE_USER';
     token = 'token';
<<<<<<< HEAD
      url_port =  'http://127.0.0.1:8080'; // chế độ thật
      // url_port = 'http://localhost:8080/';
=======
      url_port =  'http://127.0.0.1:80'; // chế độ thật
>>>>>>> f715c974fb4b7f6769c97ef59a6c053e535546d4
    // url_port = 'http://10.5.50.74:8080';
     remember = 'remember';
     auth_refresh = '/auth/refresh';
}
