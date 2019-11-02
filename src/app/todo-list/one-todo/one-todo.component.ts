import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UPDATE_TODO } from '../../../actions/todo.actions';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.scss']
})
export class OneTodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private store: Store<Todo[]>) {}

  ngOnInit() {}

  toggle() {
    const newTodo = { ...this.todo };
    newTodo.done = !newTodo.done;
    this.store.dispatch(UPDATE_TODO(newTodo));
  }
}
