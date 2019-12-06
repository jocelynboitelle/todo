import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { ReadTodoComponent } from "./read-todo/read-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  { path: "", redirectTo: "todos", pathMatch: "full" },
  {
    path: "todos",
    children: [
      { path: "create", component: CreateTodoComponent },
      { path: ":id", component: ReadTodoComponent },
      { path: "", component: TodoListComponent }
    ]
  },
  { path: "**", redirectTo: "todos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
