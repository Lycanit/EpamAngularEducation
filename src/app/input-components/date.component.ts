import { Output, Component, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'my-date',
	template: `<input type='text' [(ngModel)]="dataString" (keydown)="keyDown($event)">`
 })

 export class DateComponent  { 

    @Output() onDateUpdated = new EventEmitter();
	@Input() public dataString: string = '';
    private specialKeys: string[] = ['ArrowLeft', 'ArrowRight', 'Delete', 'Backspace', 'Home', 'End'];
    private numbers: string[] = '0123456789'.split('');

    keyDown(e)
    {
        let ctrlV = e.ctrlKey && e.code == 'KeyV';
        let isSpecial = ctrlV || this.specialKeys.indexOf(e.code) > -1;
        if (isSpecial)
        {
            setTimeout(() => this.reCheck(e.code == 'Backspace'), 0);
            return;
        }
        if (this.numbers.indexOf(e.key) == -1 || this.dataString.length > 9)
        {
            e.preventDefault();
        }
        else
        {
            setTimeout(() => this.reCheck(), 0);
        }

        
    }

    reCheck(isBackspace: boolean = false)
    {
        var temp: string = '';
        for(var i:number = 0;  i < 10 && i < this.dataString.length; i++)
        {
            if (this.numbers.indexOf(this.dataString[i]) > -1)
            {
                temp += this.dataString[i];
            }

            if (isBackspace)
            {
                if ((i + 1 < this.dataString.length) && (i == 1 || i == 4))
                {
                    temp += '.';
                }
            }
            else if (i == 1 || i == 4)
            {
                temp += '.';
            }
        }
        this.dataString = temp;
        this.onDateUpdated.emit(this.dataString);
    }
	
}