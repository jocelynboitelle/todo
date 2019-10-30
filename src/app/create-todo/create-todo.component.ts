import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  title: string = '';
  description: string;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  validate() {
    const todo: Todo = { id: 5, title: this.title, done: false };
    this.http.post<Todo>('api/todos', todo).subscribe(post => {
      console.log(post);
      this.router.navigate(['/todos']);
    });
  }
}
