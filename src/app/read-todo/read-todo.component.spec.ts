import { of } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { ReadTodoComponent } from './read-todo.component';

describe('ReadTodoComponent', () => {
  let component: ReadTodoComponent;
  let store;
  let route;
  let todosStub: Todo[];

  function initStubs() {
    todosStub = [
      { id: 1, title: 'undone', done: false },
      { id: 2, title: 'done', done: true }
    ];
  }

  beforeEach(() => {
    route = { snapshot: { paramMap: { get: {} } } };
    store = { select: {} };
    initStubs();
    spyOn(route.snapshot.paramMap, 'get').and.returnValue(todosStub[0].id);
    spyOn(store, 'select').and.returnValue(of(todosStub));
    component = new ReadTodoComponent(store, route);
  });

  it('should create', () => {
    component.ngOnInit();

    expect(component).toBeTruthy();
  });

  it('get route id', () => {
    component.ngOnInit();

    expect(route.snapshot.paramMap.get).toHaveBeenCalledWith('id');
  });

  it('select todos id', () => {
    component.ngOnInit();

    expect(store.select).toHaveBeenCalledWith('todos');
    component.todo$.subscribe(todo => {
      expect(todo).toEqual(todosStub[0]);
    });
  });
});
