import { Injectable } from '@angular/core';

import { Medidor } from '../models/medidor';

import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  medidores: Medidor[];
  tasks: Task[];
  constructor() { 
    this.tasks=[
    ];
  }
  getTask():Task[]{
    if (localStorage.getItem('tasks')==null){
      this.tasks=[];
    }else{
      this.tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }
  addTask(task:Task):void{
    this.tasks.unshift(task);
    let tasks;
    if (localStorage.getItem(tasks)==null){
      tasks=[];
      tasks.unshift(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
      tasks=JSON.parse(localStorage.getItem('tasks'));
      tasks.unshift(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }
  removetask(task:Task){
    for(let i=0;this.tasks.length;i++){
      if (task == this.tasks[i]){
        this.tasks.splice(i,1);
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
      }
    }
  }
}
