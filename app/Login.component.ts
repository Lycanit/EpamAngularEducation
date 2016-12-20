import { Component } from '@angular/core';

@Component({
  selector: 'Login',
  template: `
	<div> I am a Login component </div> 
	<div>
		<div> Login: <input id='Login' type='text'> </div> 
        <div> Password: <input type='text'> </div> 
        <div> <input type='button' value='Enter'> </div> 
	</div>
    `,

  styles: [`
    div { font-size:40px; }
    `]
})
export class LoginComponent  { }
