import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [CardComponent, DatePipe],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  // @Output() completeTaskEmitter = new EventEmitter<string>()

  constructor(private taskService: TaskService){}
  
  onComplete() {
    this.taskService.removeTask(this.task.id)
    // this.completeTaskEmitter.emit(this.task.id);
    // this.taskService.removeTask(this.task.id);
  }

    // onTaskComplete(taskId: string) {
  //   this.taskService.removeTask(taskId)
  // }
}
