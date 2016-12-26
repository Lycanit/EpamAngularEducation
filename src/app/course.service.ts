import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Course} from './course';

export class CourseService{
	
private courses : Course[];

    getCourses() : Observable<Course[]>{
          var abs = new Observable<Course[]>();
          abs.map(() => 
          {
              return this.courses.slice();
          });
          return abs;
    }

}