import { InMemoryDbService } from "angular-in-memory-web-api";
import { Todo } from "../models/todo.model";

export class InMemTodoService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [
      { id: 1, title: "make the boxes", description: "", done: true },
      { id: 2, title: "relocation", description: "", done: false },
      { id: 3, title: "overkill todo", description: "", done: true },
      { id: 4, title: "maternity appointment", description: "", done: true },
      {
        id: 5,
        title: "find a maternal assistant",
        description: "",
        done: false
      },
      {
        id: 6,
        title: "have a job",
        description: "have a salary of 28K",
        done: false
      },
      {
        id: 7,
        title: "wash the dishes",
        description: "",
        done: true
      },
      {
        id: 8,
        title: "administrative papers",
        description:
          "-SFR\n -EDF\n -Gas\n -Water\n -Maternity\n -Taxes\n -Location",
        done: false
      }
    ];
    return { todos };
  }
}
