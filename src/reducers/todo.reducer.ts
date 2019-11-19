import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const initialtodos: Todo[] = [];

const _todosReducer = createReducer(
  initialtodos,
  on(TodoActions.todosReceived, (state, payload) => {
    return [...payload.todos];
  }),
  //on(TodoActions.todoAdd, (state, payload) => [...state, payload.todo]),
  on(TodoActions.todoUpdate, (todos, payload) =>
    todos.map(todo => (todo.id === payload.todo.id ? payload.todo : todo))
  )
);

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}
