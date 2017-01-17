import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { AuthorizationService } from '../authorization.service';
import { User } from '../user';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	providers: [AuthorizationService]
})

export class LoginComponent {

	public static User: User;

	private isAuthorizeValid: boolean = true;
	private userName: string;
	private password: string;

	constructor(private router: Router, private authorizationService: AuthorizationService, private cookieService: CookieService) {

	}

	goNext(isValid: boolean) {
		this.isAuthorizeValid = isValid;
		if (isValid) {

			if (LoginComponent.User) {
				this.check();
			}
			else {
				this.authorizationService.getUser().subscribe((data) => {
					LoginComponent.User = data;
					this.check();
				});
				this.isAuthorizeValid = true;
			}
		}
		else {
			this.password = '';
		}
	}

	private check() {

		this.isAuthorizeValid = LoginComponent.User.Name == this.userName && LoginComponent.User.Password == this.password;
		if (this.isAuthorizeValid) {
			this.cookieService.put('login', this.userName);
			this.cookieService.put('password', this.password);
			this.router.navigate(['/courses']);
		}
		else {
			this.password = '';
		}

	}

}
