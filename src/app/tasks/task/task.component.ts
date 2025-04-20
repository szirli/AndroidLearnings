import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() completeTaskEmitter = new EventEmitter<string>()
  
  onComplete() {
    this.completeTaskEmitter.emit(this.task.id);
  }
}
