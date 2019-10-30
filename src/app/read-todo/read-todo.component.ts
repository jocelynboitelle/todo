import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrls: ['./read-todo.component.scss']
})
export class ReadTodoComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.todo$ = this.http.get<Todo>('api/todos/' + id);
  }
}

// export class ReadTodoComponent implements OnInit {
//   todos: Observable<Todo[]>;
//   ressource: string;

//   constructor(
//     private route: ActivatedRoute,
//     private store: Store<AppState>,
//     private http: HttpClient
//   ) {}

//   ngOnInit() {
//     console.log(this.route.snapshot.paramMap.get('id'));
//     const payload = { id: 1, name: 'test' };
//     this.todos = this.store.select('todo');
//     this.http.put('api/todos/1', payload).subscribe(post => {
//       console.log(post);
//     });
//   }

//   change(text) {
//     this.http.get('api/' + text.target.value, undefined).subscribe(post => {
//       console.log(post);
//     });
//   }
// }
