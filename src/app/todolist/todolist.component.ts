import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
 todos: { id: number; task: string; done: boolean }[] = []; // Enforcing a structured type
taskName: string = "";
done: boolean = false;

  constructor(private tl: TodoService) {
    this.loadTodos();
  }

  // Load tasks from the service
  loadTodos() {
    this.todos = this.tl.getTodos();
  }

  // Remove task and refresh list
  removeTodo(id: number) {
    this.tl.deleteTodo(id);
    this.loadTodos();
  }

  // Mark task as completed and refresh list
  completedTodo(id: number) {
    this.tl.completedTodo(id);
    this.loadTodos();
  }

  addTask() {
  console.log("Task Name:", this.taskName); // ✅ Check if taskName has a value
  if (this.taskName.trim().length === 0) {
    alert("Please enter a valid task");
  } else {
    this.tl.addTodo(this.taskName);
    this.taskName = ""; // ✅ Reset input field after adding
  }
}

resetTask() {
  console.log("Reset Button Clicked!");
  this.taskName = ""; // ✅ Clears the input field
}


}
