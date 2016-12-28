import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseService } from '../course.service';
import { AuthorsService } from '../authors.service';
import { Course } from '../course';

@Component({
	selector: 'add-edit-course',
	templateUrl: './add-edit-courses.component.html',

	styles: [`
		div { font-size:40px; }
		`],

	providers: [CourseService, AuthorsService]
})

export class AddEditCourseComponent  { 
	
	private course: Course;
	private authors: string[];
	private status: string = "waiting for response ..."; 

    constructor(private router: Router, private activateRoute: ActivatedRoute, private serv: CourseService, authorsServ: AuthorsService){

		this.authors = authorsServ.Authors;
		this.course = new Course();

        var id = activateRoute.snapshot.params['id'];
		var obs = serv.getCourse(id);
		
		obs.subscribe(course =>
            {
                this.course = course;
				this.status = '';
				for (var authorInd in this.course.Authors){
					var ind = this.authors.indexOf(this.course.Authors[authorInd]);
					if (ind > -1){
						this.authors.splice(ind, 1);
					}
				}
            }
        );

    }

	AddAuthors(authors: string[])
	{
		for (var authorInd in authors){
			var ind = this.authors.indexOf(authors[authorInd]);
			if (ind > -1){
				this.authors.splice(ind, 1);
				this.course.Authors.push(authors[authorInd]);
			}
		}
	}

	RemoveAuthors(authors: string[])
	{
		for (var authorInd in authors){
			var ind = this.course.Authors.indexOf(authors[authorInd]);
			if (ind > -1){
				this.course.Authors.splice(ind, 1);
				this.authors.push(authors[authorInd]);
			}
		}
	}

	Cancel()
	{
		this.router.navigate(['/courses']);
	}

	Save()
	{
		this.serv.setCourse(this.course);
		this.router.navigate(['/courses']);
	}


}
