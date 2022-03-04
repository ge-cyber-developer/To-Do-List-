import { ToDoList } from './todolist/todolist';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListContent } from './list-content/list-content';
import { AddItem } from './add-item/add-item';

@NgModule({
  declarations: [
    AppComponent,
    ToDoList,
    ListContent,
    AddItem,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
