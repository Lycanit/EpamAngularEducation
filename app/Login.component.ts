import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'template_htmls/login.component.html',
 })
 
export class LoginComponent  { 

	public seregasFail: string;
	
	constructor(private router: Router){}
	
    goNext(){
        this.router.navigate(['/courses']);
    }
	
}
