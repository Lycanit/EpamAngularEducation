import { Action, ActionCreator } from 'redux';

export interface TodoAction extends Action {
  todo: string;
}

export const ADD_TODO: string = 'ADD_TODO';
export const addTodo: ActionCreator<TodoAction> = (todo) => ({
  type: ADD_TODO,
  todo : todo
});

