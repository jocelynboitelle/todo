import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
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

  constructor(private store: Store<Todo[]>, private http: HttpClient) {}

  ngOnInit() {
    const todos$ = this.store.pipe(select('todos'));
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

// ngOnInit() {
//   this.done = this.http
//     .get<Todo[]>('api/todos')
//     .pipe(map(todos => todos.filter(todo => todo.done)));
//   this.undone = this.http
//     .get<Todo[]>('api/todos')
//     .pipe(map(todos => todos.filter(todo => !todo.done)));
// }

// checked(todo: Todo) {
//   todo.done = !todo.done;
//   this.http.put('api/todos/' + todo.id, todo);
// }
