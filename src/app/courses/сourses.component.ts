import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',

  styles: [`
    div { font-size:40px; }
    `]
})
export class CoursesComponent  { 

	constructor(private router: Router){}
	
    goNew(){
        this.router.navigate(['/courses/new']);
    }
	
	goEdit(id: any){
        this.router.navigate(['/courses/' + id]);
    }
	

}
