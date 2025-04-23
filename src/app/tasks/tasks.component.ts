import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks',
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required : true}) userId? : string;
  @Input({ required : true}) name? : string;
  
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId!);
  }

  // onTaskComplete(taskId: string) {
  //   this.taskService.removeTask(taskId)
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(newTask: NewTask) {
  //   this.taskService.addTask(newTask, this.userId!);
  //   this.isAddingTask = false;
  // }
}
