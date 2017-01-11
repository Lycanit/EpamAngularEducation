import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { CourseService } from '../course.service';
import { AuthorsService } from '../authors.service';
import { Course } from '../course';
import { LoginComponent } from '../login/login.component';
import { DateComponent } from '../input-components/date.component';
import { TimeComponent } from '../input-components/time.component';


@Component({
	selector: 'add-edit-course',
	templateUrl: './add-edit-courses.component.html',

	styles: [`
		div { font-size:30px; }
		`],

})

export class AddEditCourseComponent  { 
	
	private course: Course;
	private authors: string[];
	private status: string = "waiting for response ..."; 
	private userName: string = '';
	private dateString: string = '';
	private timeString: string = '';

    constructor(private router: Router, private activateRoute: ActivatedRoute, private serv: CourseService, authorsServ: AuthorsService, private cookieService:CookieService){

		if (LoginComponent.User)
        {
            this.userName = LoginComponent.User.Name;
        }
		else
		{
			this.router.navigate(['/login']);
		}

		this.authors = authorsServ.Authors;
		this.course = new Course();

        var id = activateRoute.snapshot.params['id'];
		if (id)
		{
			var obs = serv.getCourse(id);
			obs.subscribe(course =>
				{
					this.course = course;
					this.dateString = this.course.Date.toString();
					this.timeString = this.course.Duration.toString();
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
		else
		{
			this.dateString = this.course.Date.toString();
			this.timeString = this.course.Duration.toString();
			this.status = "A NEW course";
			this.course.Id = -1;
		}

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
		let checkDate = Date.parse(this.dateString);
		if (!(checkDate))
		{
			alert("Date is not valid");
			return;
		}
		let checkTime = Number(this.timeString);
		if (isNaN(checkTime))
		{
			alert("Time is not valid");
			return;
		}
		this.course.Duration = checkTime;
		this.course.Date = new Date(this.dateString);
		this.serv.setCourse(this.course);
		this.router.navigate(['/courses']);
	}

	Logout(){
		this.cookieService.remove('login');
		this.cookieService.remove('password');
        LoginComponent.User = null;
        this.router.navigate(['/login']);
    }

	handleDateUpdated(e)
	{
		this.dateString = e;
	}

	handleTimeUpdated(e)
	{
		this.timeString = e;
	}


}
