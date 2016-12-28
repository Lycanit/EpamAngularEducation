import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { AuthorsService } from '../authors.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
  
    styles: [`
        div { font-size:20px; }
        `],

    providers: [CourseService, AuthorsService]
})

export class CoursesComponent  { 

    private courses: Course[];

	constructor(private router: Router, private serv: CourseService){
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


	

}
