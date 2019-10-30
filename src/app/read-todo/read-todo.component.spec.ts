import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTodoComponent } from './read-todo.component';

describe('ReadTodoComponent', () => {
  let component: ReadTodoComponent;
  let fixture: ComponentFixture<ReadTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
