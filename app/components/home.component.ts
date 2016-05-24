import {Component} from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home.component.html'
})
export class Home {
  tasks: Task[] = [];
  validTask: boolean = true;
  borderInvisible: boolean = true;

  task: Task = new Task();

  constructor () {
    let task1 = new Task();
    let task2 = new Task();
    task1.name="Go to gym";
    task1.description="I need to workout 3 times a day to lose some pounds";
    task1.done=false;
    task2.name="Read books";
    task2.description="One week one book";
    task2.done=false;
    this.tasks.push(task1);
    this.tasks.push(task2);
  }

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

  onDelete(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task));
  }

}
