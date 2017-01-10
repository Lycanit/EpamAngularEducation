import { Output, Component, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'my-time',
	template: `<input type='text' [(ngModel)]="timeString" (keydown)="keyDown($event)"> <p [textContent]="time | myTime"> </p>`
 })

 export class TimeComponent  { 

    @Output() onTimeUpdated = new EventEmitter();
	@Input() public timeString: string = '';
    @Input() private time: number = 0; 
    private specialKeys: string[] = ['ArrowLeft', 'ArrowRight', 'Delete', 'Backspace', 'Home', 'End'];
    private numbers: string[] = '0123456789'.split('');
    

    keyDown(e)
    {
        let ctrlV = e.ctrlKey && e.code == 'KeyV';
        let isSpecial = ctrlV || this.specialKeys.indexOf(e.code) > -1;
        if (isSpecial)
        {
            setTimeout(() => this.reCheck(), 0);
            return;
        }
        if (this.numbers.indexOf(e.key) == -1)
        {
            e.preventDefault();
        }
        else
        {
            setTimeout(() => this.reCheck(), 0);
        }
    }

    reCheck()
    {
        var temp: string = '';
        for(var i:number = 0;  i < 10 && i < this.timeString.length; i++)
        {
            if (this.numbers.indexOf(this.timeString[i]) > -1)
            {
                temp += this.timeString[i];
            }
        }
        this.timeString = temp;
        this.time = Number(temp);
        this.onTimeUpdated.emit(this.timeString);
    }
	
}