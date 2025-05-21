import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {
  constructor(private todoService: TodoService) { }
  taskName: string = "";
   todos: { id: number; task: string; done: boolean }[] = []; // Enforcing a structured type
  done: boolean = false;
  // Load tasks from the service
  loadTodos() {
    this.todos = this.todoService.getTodos();
  }
  
  resetTask(){
    this.taskName = "";
  }

addTask() {
  console.log(this.taskName);
  if (this.taskName.trim().length == 0) { 
    alert("Please enter a valid task");
  } else {
    this.todoService.addTodo(this.taskName);
    this.taskName = "";

    const toastElement = document.getElementById('taskToast');
    if (toastElement) {
      const toast = new (window as any).bootstrap.Toast(toastElement);
      toast.show();
    } else {
      console.warn("Toast element not found!");
    }
  }
}

}
