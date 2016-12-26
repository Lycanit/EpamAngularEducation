import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
  
    styles: [`
        div { font-size:40px; }
        `],

    providers: [CourseService]
})

export class CoursesComponent  { 

    private courses: Course[];
	constructor(private router: Router, private serv: CourseService){
        serv.getCourses().subscribe(courses =>
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
