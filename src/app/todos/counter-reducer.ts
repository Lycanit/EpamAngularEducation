import { Reducer, Action } from 'redux';
import { AppState } from './app-state';
import {
  ADD_TODO,
  TodoAction
} from './counter-action-creators';

let initialState: AppState = { counter: 0, todo:  'to finish angular'  };

export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: TodoAction): AppState => {
    switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, { 
        todos: state.todo =  action.todo
      });
    default:
      return state;
    }
  };
