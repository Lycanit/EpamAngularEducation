import { Component } from '@angular/core';

@Component({
  selector: 'Courses',
  template: `
    <div> I am a Course component </div> 
	<div>
		<div> Search: <input id='Login' type='text'> <input type='button' value='Find'> <input type='button' value='Add'> </div> 
        <div> Video course: 1h 28 min <input type='button' value='Edit'> <input type='button' value='Delete'> </div> 
        <div> Video course: 0h 15 min <input type='button' value='Edit'> <input type='button' value='Delete'> </div> 
        <div> Video course: 2h 15 min <input type='button' value='Edit'> <input type='button' value='Delete'> </div> 
	</div>
    `,

  styles: [`
    div { font-size:40px; }
    `]
})
export class CoursesComponent  { }
