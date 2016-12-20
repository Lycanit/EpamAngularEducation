import { Component } from '@angular/core';

@Component({
  selector: 'Login',
  template: `
	<div class="form-inline">
		<div> I am a Login component </div> 
		<div class='form-group'>
			<div class="col-md-8"> Login: <input class='form-control' id='Login' type='text'> </div> 
			<div class="col-md-8"> Password: <input class='form-control' type='text'> </div> 
			<br />
			<div class="col-md-8"> <input class='form-control' type='button' value='Enter'> </div> 
		</div>
		
	</div>
    `,

})
export class LoginComponent  { }
