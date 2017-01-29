
import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app-store';
import { AppState } from './app-state';
import * as CounterActions from './counter-action-creators';

@Component({
    selector: 'counter-component',
    template: `
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">
            <div>
              <input #todo>
              <button (click)="addTodo(todo)">Add todo</button>
            </div>
            
              <ul *ngFor="let todo of todos">
                  {{ todo }}
              </ul>
            
          </div>
        </div>
      </div>
    </div>
  `
})
export default class CounterComponent {
    counter: number;
    todos: string[] = [];

    constructor( @Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(() => this.readState());
        this.readState();
    }

    readState() {
        let state: AppState = this.store.getState() as AppState;
        this.counter = state.counter;
        this.todos.push(state.todo);
    }

    addTodo(todo) {
        this.store.dispatch(CounterActions.addTodo(todo.value));
    }

    
    
}
