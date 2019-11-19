import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.scss"]
})
export class CreateTodoComponent {
  title = "";
  description = "";

  constructor(private store: Store<Todo[]>, private router: Router) {}

  validate() {
    const todo: Todo = {
      id: null,
      title: this.title,
      description: this.description,
      done: false
    };
    this.store.dispatch({ type: "[Todo] Add", todo });
    this.router.navigate(["/todos"]);
  }
}
