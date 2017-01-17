import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { User } from './user';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})

export class AppComponent {

    constructor(cookieService: CookieService) {
        let login = cookieService.get('login');
        let password = cookieService.get('password');
        if ((login) && (password)) {
            let user = new User();
            user.Name = login;
            user.Password = password;
            LoginComponent.User = user;
        }
    }
}