import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ErrorHandler } from '@angular/core/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/сourses.component';
import { AddEditCourseComponent } from './add-edit-courses/add-edit-courses.component';
import { DateComponent } from './input-components/date.component';
import { TimeComponent } from './input-components/time.component';

import { MyTimePipe } from './pipes/my-time.pipe';
import { CoursesFilterPipe } from './pipes/courses-filter-pipe';

import { CourseService } from './services/course.service';
import { AuthorsService } from './services/authors.service';

import { MyGuard } from './my-guard';

import { GlobalErrorHandler } from './global-error-handler';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent, pathMatch: 'full', canActivate: [MyGuard] },
  { path: 'courses/new', component: AddEditCourseComponent, canActivate: [MyGuard] },
  { path: 'courses/:id', component: AddEditCourseComponent, canActivate: [MyGuard] }
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule],
  declarations: [AppComponent, LoginComponent, CoursesComponent, AddEditCourseComponent, DateComponent, TimeComponent, MyTimePipe, CoursesFilterPipe],
  providers: [CourseService, AuthorsService, CookieService, MyGuard, { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})

export class AppModule { }
