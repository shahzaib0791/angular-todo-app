import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title !:string;
  desc !:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor(){}

  onSubmit(){
    const todo: Todo = {
      id: 8,
      title: this.title,
      desc: this.desc,
      is_active: true
    }
    console.log("form submitted",todo);
    this.todoAdd.emit(todo);
  }
}
