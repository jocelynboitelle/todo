import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrls: ['./read-todo.component.scss']
})
export class ReadTodoComponent implements OnInit {
  todo$: Observable<Todo>;
  todo: Todo;

  constructor(private store: Store<Todo[]>, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.todo$ = this.store
      .select('todos')
      .pipe(map((todos: Todo[]) => todos.find(todo => +todo.id === +id)));
  }
}
