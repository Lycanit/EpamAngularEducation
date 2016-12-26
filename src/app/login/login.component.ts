import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../authorization.service';
import {User} from '../user';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
    providers: [AuthorizationService]
 })
 
export class LoginComponent  { 

	private isAuthorizeValid: boolean = true;
	private user: User;
	private userName: string;
	private password: string;
	
	constructor(private router: Router, private authorizationService: AuthorizationService){}
	
    goNext(isValid: boolean){
		this.isAuthorizeValid = isValid;
		if (isValid)
		{

			if (this.user)
			{
				this.check();
			}
			else
			{
				this.authorizationService.getUser().subscribe((data)=>
				{
					this.user = data;
					this.check();
				});
				this.isAuthorizeValid = true;
			}

		}
    }
	
	private check(){
		alert("Name = " + this.user.Name);
		alert("Pass = " + this.user.Password);
		this.isAuthorizeValid = this.user.Name == this.userName && this.user.Password == this.password;
        if (this.isAuthorizeValid)
		{
			this.router.navigate(['/courses']);
		}
    }
	
}
