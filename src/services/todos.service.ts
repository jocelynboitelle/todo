import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>('api/todos');
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('api/todos', todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>('api/todos/' + todo.id, todo);
  }
}
