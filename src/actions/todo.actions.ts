import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const ADD_TODO = createAction('[TODO] Add', props<Todo>());
export const UPDATE_TODO = createAction('[TODO] update', props<Todo>());
