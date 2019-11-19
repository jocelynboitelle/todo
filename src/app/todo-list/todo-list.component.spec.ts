import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { Todo } from "../../models/todo.model";
import { TodoListComponent } from "./todo-list.component";

@Component({
  selector: "app-one-todo",
  template: "<p>Mock Product Editor Component</p>"
})
class OneTodoComponent {}

describe("TodoListComponent", () => {
  let fixture: ComponentFixture<TodoListComponent>;
  let component: TodoListComponent;
  let router: RouterTestingModule;
  let store;
  let todos: Todo[];

  beforeEach(() => {
    initStubs();
    store = { select: {} };
    spyOn(store, "select").and.returnValue(of(todos));

    TestBed.configureTestingModule({
      declarations: [TodoListComponent, OneTodoComponent],
      imports: [MatCardModule, MatListModule, RouterTestingModule],
      providers: [{ provide: Store, useValue: store }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);

    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("click on app-one-todo", () => {
    let create = fixture.debugElement.query(By.css("mat-card"));

    create.triggerEventHandler("click", {});

    fixture.detectChanges();

    console.log(create.nativeElement);
  });

  it("calls the todos store on initialization", () => {
    component.ngOnInit();
    expect(store.select).toHaveBeenCalledWith("todos");
  });

  it("has access to undone todos", () => {
    let undone = [];
    component.ngOnInit();
    expect(component.undone$).not.toBeNull();
    component.undone$.subscribe(
      todos => (undone = todos.filter(todo => !todo.done))
    );
    expect(undone).toEqual([{ id: 1, title: "test1", done: false }]);
  });

  it("has access to done todos", () => {
    let done = [];
    component.ngOnInit();
    expect(component.done$).not.toBeNull();
    component.done$.subscribe(
      todos => (done = todos.filter(todo => todo.done))
    );
    expect(done).toEqual([{ id: 2, title: "test2", done: true }]);
  });

  function initStubs() {
    todos = [
      { id: 1, title: "test1", done: false },
      { id: 2, title: "test2", done: true }
    ];
  }
});
