import { TaskSecond } from './../../interfaces/tasks';
import { TasksMain } from 'src/app/interfaces/tasks';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  constructor(public modalController: ModalController) { }

  public task: TasksMain = {
    id: 1,
    start: null,
    text:"",
    associatedTasks:[
      // {
      //   text:"tarea secundaria 1",
      //   child_name:"niñoMierdas",
      //   start: 1,
      //   end: 5
      // },
      // {
      //   text:"tarea secundaria 2",
      //   child_name:"niñoMierdas2",
      //   start: 2,
      //   end: 8
      // }
    ],
    end:null,
  }
  public secondTask: TaskSecond = {
    text:"",
    child_name:"",
    start: null,
    end: null
  }
  ngOnInit() {
  }

  dismiss(action) {
    if (action) {
      this.modalController.dismiss(this.task);
    }else{
      this.modalController.dismiss();
    }
  }
  addSecondTasks(){
    this.task.associatedTasks.push(this.secondTask);
    this.secondTask =  {
      text:"",
      child_name:"",
      start: null,
      end: null
    };
  }
  removeSecondTask(deleteTask){
    this.task.associatedTasks = this.task.associatedTasks.filter(obj => obj !== deleteTask);
  }
}
