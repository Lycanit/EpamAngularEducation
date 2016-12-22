import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { LoginComponent }  from './login.component';
import { CoursesComponent }  from './сourses.component';
import { AddEditCourseComponent }  from './add-edit-courses.component';

const appRoutes: Routes =[
	{ path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch:'full' },
    { path: 'courses', component: CoursesComponent, pathMatch:'full' },
	{ path: 'courses/:id', component: AddEditCourseComponent}
    
];
 

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, CoursesComponent, AddEditCourseComponent ],
  bootstrap:    [ AppComponent ]
})


/*
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ LoginComponent ],
  bootstrap:    [ LoginComponent ]
})
*/

export class AppModule { }
