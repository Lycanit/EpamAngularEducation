import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'myTime'
})
export class MyTimePipe implements PipeTransform {
    transform(value: number, args?: string): string {
     
    if (value < 0) return '';     

    let sec = value % 60;
    let min = Math.floor(value % 3600 / 60);
    let hour = Math.floor(value / 3600);

    let ret = '';
    if (hour > 0)
    {
        ret += "hours : " + hour;
    }

    if (min > 0 || hour > 1)
    {
        ret += " mins : " + min;
    }

    ret += " sec :" + sec;

    return ret;

  }
}