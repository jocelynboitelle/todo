import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { CreateTodoComponent } from "./create-todo.component";

describe("CreateTodoComponent", () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;
  let store;
  let router;

  beforeEach(() => {
    store = { dispatch: {} };
    router = { navigate: {} };
    spyOn(store, "dispatch");
    spyOn(router, "navigate");

    TestBed.configureTestingModule({
      declarations: [CreateTodoComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: Store, useValue: store },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;
    spyOn(component, "validate").and.callThrough();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("changes title variable via input", () => {
    let titleEl: DebugElement = fixture.debugElement.query(By.css("input"));

    fixture.detectChanges();

    titleEl.nativeElement.value = "test title";

    titleEl.nativeElement.dispatchEvent(new Event("input"));

    expect(component.title).toBe("test title");
  });

  it("changes description variable via input", () => {
    let descripitonEl: DebugElement = fixture.debugElement.query(
      By.css("input")
    );

    fixture.detectChanges();

    descripitonEl.nativeElement.value = "test description";

    descripitonEl.nativeElement.dispatchEvent(new Event("input"));

    expect(component.title).toBe("test description");
  });

  it("click on button", () => {
    let button = fixture.debugElement.query(By.css("button"));

    button.triggerEventHandler("click", {});

    fixture.detectChanges();

    expect(component.validate).toHaveBeenCalled();
  });

  it("initialize title and description variable", () => {
    expect(component.title).toBe("");
    expect(component.description).toBe("");
  });

  it("add todo in the store with action", () => {
    component.title = "title";
    component.description = "description";

    component.validate();

    expect(store.dispatch).toHaveBeenCalled();
    const arg = store.dispatch.calls.argsFor(0)[0];
    expect(arg.type).toBe("[Todo] Add");
    expect(arg.todo.id).toBeNull();
    expect(arg.todo.title).toBe("title");
    expect(arg.todo.description).toBe("description");
    expect(arg.todo.done).toBe(false);
  });

  it("Navigate to /todos", () => {
    component.validate();
    expect(router.navigate).toHaveBeenCalledWith(["/todos"]);
  });
});
