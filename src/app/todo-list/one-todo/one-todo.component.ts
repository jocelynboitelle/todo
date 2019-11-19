import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Todo } from "../../../models/todo.model";

@Component({
  selector: "app-one-todo",
  templateUrl: "./one-todo.component.html",
  styleUrls: ["./one-todo.component.scss"]
})
export class OneTodoComponent {
  @Input() todo: Todo;

  constructor(private store: Store<Todo[]>) {}

  toggle() {
    const todo = { ...this.todo };
    todo.done = !todo.done;
    this.store.dispatch({ type: "[Todo] Update", todo });
  }
}
