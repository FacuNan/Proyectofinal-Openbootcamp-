import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITasks } from 'src/app/models/itasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
@Input() task: ITasks | undefined;
@Output() delete:EventEmitter<ITasks>= new EventEmitter <ITasks>();

onDelete():void{
this.delete.emit(this.task)
}

}
