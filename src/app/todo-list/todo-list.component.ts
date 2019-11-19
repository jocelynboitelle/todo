import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  undone$: Observable<Todo[]>;
  done$: Observable<Todo[]>;

  constructor(private store: Store<Todo[]>) {}

  ngOnInit() {
    const todos$ = this.store.select<Todo[]>('todos');
    this.undone$ = todos$.pipe(
      map(todos => todos.filter(todo => !todo.done)),
      map(todos => [...todos].reverse())
    );
    this.done$ = todos$.pipe(
      map(todos => todos.filter(todo => todo.done)),
      map(todos => [...todos].reverse())
    );
  }
}
