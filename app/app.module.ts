import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

//import { AppComponent }   from './app.component';
import { LoginComponent }  from './login.component';
/*
import { CoursesComponent }  from './сourses.component';
import { AddEditCourseComponent }  from './add-edit-courses.component';

const appRoutes: Routes =[
    { path: '', redirectTo: '/login', component: LoginComponent},
    { path: '/courses', component: CoursesComponent},
    { path: '/courses/1', component: AddEditCourseComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, CoursesComponent, AddEditCourseComponent ],
  bootstrap:    [ AppComponent, LoginComponent ]
})
*/

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ LoginComponent ],
  bootstrap:    [ LoginComponent ]
})

export class AppModule { }
