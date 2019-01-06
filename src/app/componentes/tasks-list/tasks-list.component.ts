import { Component, OnInit } from '@angular/core';

import {Task} from '../../models/task';

import{DataService} from '../../services/data.service';

import { DataService2 }  from '../../services/data/data.service';

import { Data } from '../../services/data/class.data';

interface mydata{
  obj:Object;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];
  error: any;
  headers: string[];
  config: Data[];
  public data : any
  constructor(public dataService: DataService, public dataService2: DataService2) { }

  ngOnInit() {
    this.tasks=this.dataService.getTask();
    this.showConfigResponse();
    this.data = [{'name':'Anil', 'anil.singh581@gmail.com' :'ssd', 'age' :'34', 'city':'Noida, UP, India' },
    {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
    {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
   ]
  
  }
  addTask(task:Task){
    this.dataService.addTask(task);
  }
  showConfigResponse() {
    this.dataService2.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
  
        // access the body directly, which is typed as `Config`.
       // this.config={ ... resp.body };
        var auxs= resp.body;
        var aux2=JSON.stringify(auxs);
        this.config=JSON.parse(aux2);
        for (let aux of this.config)
  //      console.log(aux.title)
        ;

       // console.log(aux);
      });
  }

}
