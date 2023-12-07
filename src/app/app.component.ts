import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todolist';
  mytasks: (string | number)[] = [];
  completedtasks: (string | number)[] = [];
  currentvalue: string | number = '';
  count: boolean = true;

  TodoTask(task: HTMLInputElement) {
    this.mytasks.push(task.value);
    task.value = ' ';
    this.currentvalue = '';
  }
  taskcompletd(index: number) {
    let removecpmpletedtasks = this.mytasks.splice(index, 1);
    let finishedTasks = removecpmpletedtasks.toString();
    this.completedtasks.push(finishedTasks);
    if (this.completedtasks.length > 0) {
      this.count = false;
    }
  }
}
