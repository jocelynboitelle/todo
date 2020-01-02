import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let store;

  beforeEach(() => {
    store = { dispatch: {} };
    spyOn(store, 'dispatch');
    component = new AppComponent(store);
    component.ngOnInit();
  });

  it('charging the store with action', () => {
    expect(store.dispatch).toHaveBeenCalled();
    const calls = store.dispatch.calls;
    const args = calls.argsFor(0);
    expect(args[0]).toEqual({ type: '[Todos] Request' });
    const type = args[0].type;
    expect(type).toBe('[Todos] Request');
  });
});
