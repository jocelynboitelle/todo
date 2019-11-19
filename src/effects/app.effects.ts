import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodosService } from '../services/todos.service';

@Injectable()
export class AppEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Todos] Request'),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map(todos => ({
            type: '[Todos] Received',
            todos
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Todo] Add'),
      mergeMap(({ todo }) =>
        this.todosService.addTodo(todo).pipe(
          map(() => ({
            type: '[Todos] Request'
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Todo] Update'),
      mergeMap(({ todo }) =>
        this.todosService.updateTodo(todo).pipe(
          map(() => ({
            type: '[Todo] Update success'
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
