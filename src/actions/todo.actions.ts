import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const todosRequested = createAction('[Todos] Request');
export const todosReceived = createAction(
  '[Todos] Received',
  props<{ todos: Todo[] }>()
);
export const todoAdd = createAction('[Todo] Add', props<{ todo: Todo }>());
export const todoUpdate = createAction(
  '[Todo] Update',
  props<{ todo: Todo }>()
);
