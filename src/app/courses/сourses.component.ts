import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { AuthorsService } from '../authors.service';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
  
    styles: [`
        div { font-size:20px; }
        `],
})

export class CoursesComponent  { 

    private courses: Course[];
    private userName: string = '';

	constructor(private router: Router, private serv: CourseService){

        if (LoginComponent.User)
        {
            this.userName = LoginComponent.User.Name;
        }
        var obs = serv.Courses;

        obs.subscribe(courses =>
            {
                this.courses = courses;
            }
        );
    }
	
    goNew(){
        this.router.navigate(['/courses/new']);
    }
	
	goEdit(id: any){
        this.router.navigate(['/courses/' + id]);
    }

    goDelete(id: any){

        if (confirm('Are you sure ?')) {
            this.Del(id);
        }
        
    }

    private Del(id: any)
    {
        var ind = -1;
        for (var i = 0; i < this.courses.length; i++)
        {
            var c = this.courses[i];
            if (c.Id == id)
            {
                ind = i;
                break;
            }
        }
        if (ind > -1)
        {
            this.courses.splice(ind, 1);
            this.serv.delCourse(id);
        }        
    }

    Logout(){
        LoginComponent.User = null;
        this.router.navigate(['/login']);
    }
	

}
