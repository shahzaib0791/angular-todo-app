import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  constructor(){
    // setTimeout(() => {
    //   this.title = "changed"
    // }, 2000);
  }
  
}
