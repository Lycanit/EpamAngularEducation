import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }   from './app.component';
import { LoginComponent }  from './login/login.component';
import { CoursesComponent }  from './courses/сourses.component';
import { AddEditCourseComponent }  from './add-edit-courses/add-edit-courses.component';

import { DateComponent }  from './input-components/date.component';

import { MyTimePipe }  from './my-time.pipe';

import { CourseService } from './course.service';
import { AuthorsService } from './authors.service';

const appRoutes: Routes =[
	  { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch:'full' },
    { path: 'courses', component: CoursesComponent, pathMatch:'full' },
	  { path: 'courses/new', component: AddEditCourseComponent},
	  { path: 'courses/:id', component: AddEditCourseComponent}
];
 

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule ],
  declarations: [ AppComponent, LoginComponent, CoursesComponent, AddEditCourseComponent, DateComponent, MyTimePipe ],
  providers:    [ CourseService, AuthorsService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
