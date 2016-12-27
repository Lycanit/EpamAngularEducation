import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AuthorsService} from './authors.service';
import {Course} from './course';


@Injectable()
export class CourseService{
	
    private courses: Course[];
    private authors: string[];

    constructor(service: AuthorsService){
            this.authors = service.Authors;
            this.courses = [
                {Id : 1, Title: 'First', Description: 'Get started', Duration: 3600, Date: new Date(2016, 8, 1), Authors:[this.authors[0], this.authors[1]]},
                {Id : 2, Title: 'Second', Description: 'Intoduction in type script', Duration: 1860, Date: new Date(2016, 9, 10), Authors:[this.authors[1], this.authors[2]]},
                {Id : 3, Title: 'Third', Description: 'Angular hello world', Duration: 1560, Date: new Date(2016, 8, 7), Authors:[this.authors[2], this.authors[3]]},
            ];
        }
    
    get Courses() : Observable<Course[]>{
        var obs = new Observable(observer => {
            observer.next(this.courses.slice());
        });
          
          return obs;
    }

}