import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'add-edit-course',
  templateUrl: 'template_htmls/add-edit-courses.component.html',

  styles: [`
    div { font-size:40px; }
    `]
})
export class AddEditCourseComponent  { 
	
	id: number;
	someText: string;
	
    constructor(private activateRoute: ActivatedRoute){
         
        this.id = activateRoute.snapshot.params['id'];
		if (this.id)
		{
			this.someText = "My ID is " + this.id;
		}
		else
		{
			this.someText = "I am a new cource ";
		}
		
    }

}
