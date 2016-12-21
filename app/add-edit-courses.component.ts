import { Component } from '@angular/core';

@Component({
  selector: 'add-edit-course',
  template: `
    <div> I am an Add / Edit Course component </div> 
	<div>
		<div> Title: <input type='text'> </div> 
        <div> Description: <input type='text'> </div> 
        <div> Date: <input type='text'> </div> 
        <div> Duration: <input type='text'> </div> 
        <div> Authors: 
            <select multiple='multiple'>
              <option>Smith</option>
              <option>Johnson</option>
              <option>William</option>
            </select> 
            <input type='button' value='>'>
            <input type='button' value='<'>
            <select multiple='multiple'>
              <option>Miller</option>
              <option>Brown</option>
            </select> 
        </div> 
        <div> <input type='button' value='Save'> <input type='button' value='Cancel'> </div> 
	</div>
    `,

  styles: [`
    div { font-size:40px; }
    `]
})
export class AddEditCourseComponent  { }
