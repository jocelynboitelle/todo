import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemTodoService implements InMemoryDbService {
  createDb() {
    let todos = [
      { id: 1, title: 'Windstorm', done: true },
      { id: 2, title: 'Bombasto', done: true },
      { id: 3, title: 'Magneta', done: false },
      { id: 4, title: 'Tornado', done: true }
    ];
    return { todos };
  }
}
