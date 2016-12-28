import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AuthorsService} from './authors.service';
import {Course} from './course';


@Injectable()
export class CourseService{
	
    private courses: { [id: number]: Course };
    private authors: string[];

    constructor(service: AuthorsService){
            this.authors = service.Authors;
            this.courses = {
                [1] : {Id : 1, Title: 'First', Description: 'Get started', Duration: 1860, Date: new Date(2016, 8, 1), Authors:[this.authors[0], this.authors[1]]},
                [2] : {Id : 2, Title: 'Second', Description: 'Intoduction in type script', Duration: 1870, Date: new Date(2016, 9, 10), Authors:[this.authors[1], this.authors[2]]},
                [3] : {Id : 3, Title: 'Third', Description: 'Angular hello world', Duration: 7872, Date: new Date(2016, 8, 7), Authors:[this.authors[2], this.authors[3]]},
            };
        }
    
    get Courses() : Observable<Course[]>{
        var obs = new Observable(observer => {
            let ar: Course[] = [];
            for (var course in this.courses)
            {
                var c = this.courses[course];
                ar.push(c);
            }
            observer.next(ar);
        });
          
          return obs;
    }

    getCourse(id: number) : Observable<Course>{
        var obs = new Observable(observer => {
            var ret: Course = this.courses[id];
            setTimeout(() => {
              observer.next(ret);
            }, 2500);
        });
        return obs;
    }

    setCourse(course: Course)
    {
        if (course.Id == -1)
        {
            var max = -1;
            for (var c in this.courses)
            {
                var cur = this.courses[c];
                if (cur.Id > max)
                {
                    max = cur.Id;
                }
            }
            course.Id = max + 1;
        }
        this.courses[course.Id] = course;
    }

}