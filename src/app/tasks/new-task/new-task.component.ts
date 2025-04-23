import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output()
  private closeEventEmitter = new EventEmitter<void>();
  public get cancelledEventEmitter() {
    return this.closeEventEmitter;
  }
  // public set cancelledEventEmitter(value) {
  //   this.closeEventEmitter = value;
  // }
  @Input({required: true}) userId?:string;

  // @Output() addTaskEmitter = new EventEmitter<NewTask>();
  taskService: TaskService=inject(TaskService);

  enteredTitle= '';
  enteredSummary = '';
  enteredDueDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');
  
  onCancelAddTask() {
    this.closeEventEmitter.emit();
  }

  onSubmit() {
    // this.addTaskEmitter.emit({
    //   title : this.enteredTitle,
    //   summary : this.enteredSummary,
    //   date : this.enteredDueDate
    // });
    this.taskService.addTask({
        title : this.enteredTitle,
        summary : this.enteredSummary,
        date : this.enteredDueDate
      }, this.userId!);
      this.closeEventEmitter.emit()
  }
}
