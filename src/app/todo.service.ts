import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
 
 todoList: { id: number; task: string; done: boolean }[] = [];

 id: number=this.todoList.length+1;
  getTodos(){
    return this.todoList;
  }

  addTodo(taskName:string){ 
    this.todoList.push({
      "id": this.id++, "task": taskName,
      "done": false
    })
  }

 deleteTodo(id: number) {
  // Remove the selected item
  this.todoList = this.todoList.filter(todo => todo.id !== id);


  this.todoList.forEach((todo, index) => {
    todo.id = index + 1;
  });

  // Update the next available ID
  this.id = this.todoList.length + 1;
}

completedTodo(id: number) {
  this.todoList = this.todoList.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}



}
