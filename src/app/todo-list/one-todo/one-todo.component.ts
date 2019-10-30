import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.scss']
})
export class OneTodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.todo.done = !this.todo.done;
  }
}
