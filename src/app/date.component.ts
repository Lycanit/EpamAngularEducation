import { Component } from '@angular/core';

@Component({
	selector: 'my-date',
	template: `<input type='text' [(ngModel)]="DataString" (ngModelChange)="OnChange()">`
 })

 export class DateComponent  { 

	public DataString: string = '';
    private numbers: string[] = '0123456789'.split('');

    OnChange()
    {
        this.DataString = 'Test';
        /*
        var temp: string = '';
        for(var i:number = 0;  i < 10 && i < this.DataString.length; i++)
        {
            if (i == 2 || i == 5)
            {
                temp += '.';
            }
            else
            {
                if (this.numbers.indexOf(this.DataString[i]) > -1)
                {
                    temp += this.DataString[i];
                }
            }
        }
        this.DataString = temp;
        */
    }
	
}