import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ADD_TODO } from '../../actions/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  title: string = '';
  description: string;

  constructor(
    private store: Store<Todo[]>,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {}

  validate() {
    const todo: Todo = { id: null, title: this.title, done: false };
    this.store.dispatch(ADD_TODO(todo));
    this.router.navigate(['/todos']);
  }
}
// validate() {
//   this.http.post<Todo>('api/todos', todo).subscribe(post => {
//     console.log(post);
//     this.router.navigate(['/todos']);
//   });
// }
