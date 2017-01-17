import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { LoginComponent } from './login/login.component';

export class MyGuard implements CanActivate{
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        let ret = false;
        if (LoginComponent.User)
        {
            ret = true;
        }
        return ret;
    }
}