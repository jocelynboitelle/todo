import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { todosReducer } from '../reducers/todo.reducer';
import { InMemTodoService } from '../services/inMemHero.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReadTodoComponent } from './read-todo/read-todo.component';
import { OneTodoComponent } from './todo-list/one-todo/one-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    ReadTodoComponent,
    TodoListComponent,
    OneTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos: todosReducer
    }),
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemTodoService),
    HttpClientModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
