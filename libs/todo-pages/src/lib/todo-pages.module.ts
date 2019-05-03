import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TodoListComponent],
  entryComponents: [TodoListComponent]
})
export class TodoPagesModule {}
