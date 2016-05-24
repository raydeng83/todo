import {Component} from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home.component.html'
})
export class Home {
  tasks: Task[] = [];
  validTask: boolean = true;

  task: Task = new Task();

  onAdd () {
    if (this.task.name != null && this.task.description != null) {
      this.validTask = true;
      this.addTask();
    } else {
      this.validTask=false;
    }
  }

  addTask() {
    this.tasks.push(this.task);
    this.task = new Task();
  }

}
