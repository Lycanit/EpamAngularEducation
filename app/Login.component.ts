import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'template_htmls/login.component.html',
 })
 
export class LoginComponent  { 
	private isAuthorizeValid: boolean = true;
	private userName: string;
	private password: string;
	
	constructor(private router: Router){}
	
    goNext(isValid: boolean){
		this.isAuthorizeValid = isValid;
		if (isValid)
		{
			this.router.navigate(['/courses']);
		}
    }
	
}
