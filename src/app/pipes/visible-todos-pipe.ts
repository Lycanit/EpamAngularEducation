import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'visibleTodos'
})
export class VisibleTodosPipe implements PipeTransform {
    transform(todos, filter) {
        return this.getVisibleTodos(todos, filter);
    }

    private getVisibleTodos(todos, filter) {
        switch (filter) {
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ALL':
            default:
                return todos;
        }
    };
}