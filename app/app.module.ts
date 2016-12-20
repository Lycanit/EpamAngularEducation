import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent }  from './Login.component';
import { CoursesComponent }  from './Courses.component';
import { AddEditCourseComponent }  from './AddEditCourses.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ LoginComponent, CoursesComponent, AddEditCourseComponent ],
  bootstrap:    [ LoginComponent, CoursesComponent, AddEditCourseComponent ]
})

export class AppModule { }
