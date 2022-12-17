import { Component } from '@angular/core';
import { ITasks, Lavel } from 'src/app/models/itasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent {
  tarea1: ITasks = {
    title: 'tarea 1',
    description:'Descripcion 1',
    completed:false,
    lavel: Lavel.Info
  
  }

  tarea2: ITasks = {
    title: 'tarea 2',
    description:'Descripcion 2',
    completed:true,
    lavel: Lavel.Urgent
  
  }

  deleteTask(task:ITasks){
    alert(`Usted ha eliminado ${task.title}`);
  }
  
}
