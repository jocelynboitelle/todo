import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const initialtodos: Todo[] = [];

const todosReducer = createReducer(
  initialtodos,
  on(TodoActions.todosReceived, (state, payload) => {
    return [...payload.todos];
  }),
  on(TodoActions.todoUpdate, (todos, payload) =>
    todos.map(todo => (todo.id === payload.todo.id ? payload.todo : todo))
  )
);

export function todosReducerFunction(state, action) {
  return todosReducer(state, action);
}
