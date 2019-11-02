import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const initialtodos: Todo[] = [
  {
    id: 1,
    title: 'Initial Todo',
    done: false
  },
  {
    id: 2,
    title: 'I Todo',
    done: true
  }
];

const _todosReducer = createReducer(
  initialtodos,
  on(TodoActions.ADD_TODO, (todos, payload) => [
    ...todos,
    { ...payload, id: newId(todos) }
  ]),
  on(TodoActions.UPDATE_TODO, (todos, payload) =>
    todos.map(todo => (todo.id === payload.id ? payload : todo))
  )
);

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}

function newId(todos: Todo[]) {
  const ids = todos.map(todo => todo.id);
  return Math.max(...ids) + 1;
}
