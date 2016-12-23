import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from './authorization.service';

@Component({
	selector: 'login',
	templateUrl: 'template_htmls/login.component.html',
    providers: [AuthorizationService]
 })
 
export class LoginComponent  { 

	private isAuthorizeValid: boolean = true;
	private userName: string;
	private password: string;
	
	constructor(private router: Router, private authorizationService: AuthorizationService){}
	
    goNext(isValid: boolean){
		this.isAuthorizeValid = isValid;
		if (isValid)
		{
			if (this.authorizationService.check(this.userName, this.password))
			{
				this.router.navigate(['/courses']);
			}
			else
			{
				this.isAuthorizeValid = false;
			}
		}
    }
	
}
