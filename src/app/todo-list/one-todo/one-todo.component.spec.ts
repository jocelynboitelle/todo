import { OneTodoComponent } from "./one-todo.component";

describe("OneTodoComponent", () => {
  let component: OneTodoComponent;
  let store;
  // let fixture: ComponentFixture<OneTodoComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ OneTodoComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(OneTodoComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    store = { dispatch: {} };
    spyOn(store, "dispatch");
    component = new OneTodoComponent(store);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("verifie que létat de todo.done change", () => {
    component.todo = { id: 1, title: "", description: "", done: false };

    component.toggle();

    expect(store.dispatch).toHaveBeenCalled();
    const arg = store.dispatch.calls.argsFor(0)[0];
    expect(arg.type).toBe("[Todo] Update");
    expect(arg.todo.done).toBe(true);
  });
});
