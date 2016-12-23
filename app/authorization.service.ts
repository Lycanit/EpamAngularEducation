import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
//@Injectable()
export class AuthorizationService{
	
	
	public check(userName: string, password: string){
         
		 return userName == "q" && password == "q";
        //this.data.push(new Phone(name, price));
    }
 /*
    constructor(private http: Http){ }
     
    getUser() : Observable<User>{
		
        return this.http.get('authorization.json')
                        .map((resp:Response)=>{
                            let userData = resp.json().data;
                            user = new User();
							user.Login = userData.Login;
							user.Password = userData.Password;
                            return user;
                        });
    }
	*/
}