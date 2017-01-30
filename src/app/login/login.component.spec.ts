import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { AuthorizationService } from '../services/authorization.service';
import { User } from '../user';
import { LoginComponent } from './login.component';

describe('MyList Tests', () => {

    it('Should have User', () => {
        LoginComponent.User = new User();
        LoginComponent.User.Name = "q";
        LoginComponent.User.Password = "q";
        expect(LoginComponent.User.Name).toEqual("q");
        expect(LoginComponent.User.Password).toEqual("q");
    });
});
 
