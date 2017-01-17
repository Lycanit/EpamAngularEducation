import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
    name: 'coursesFilterPipe'
})

@Injectable()
export class CoursesFilterPipe implements PipeTransform {
    transform(items: Course[], title: string): Course[] {
        return items.filter(item => item.Title == title || title == '');
    }
}