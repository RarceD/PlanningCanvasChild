import { CreateTaskPage } from './../../modal/create-task/create-task.page';
import { RequestsService } from 'src/app/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Children, TasksMain } from 'src/app/interfaces/tasks';
import { CreateGroupPage } from 'src/app/modal/create-group/create-group.page';
export interface Data {
  movies: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
  encapsulation: ViewEncapsulation.None
})


export class SchedulePage implements OnInit {

  constructor(private requestService: RequestsService,
    public modalController: ModalController,) {
  }
  public calendarButtonColor: string = "light";
  public columns: string[] = ["L", "M", "X", "J", "V", "L", "M", "X", "J", "V"]
  public tasks: TasksMain[] =
    [
      {
        id: 1,
        text: "TASK SCHEDULE",
        start: 0,
        associatedTasks: [],
        expanded: false
      }
    ]

  childrens: Children[] = [
    {
      name: "Tom",
      color: "success"
    },
    {
      name: "Oliver",
      color: "danger"
    },
    {
      name: "Rubén",
      color: "secondary"
    },
    {
      name: "Erica",
      color: "warning"
    },
    {
      name: "Pablito",
      color: "tertiary"
    },
  ]
  //TODO: round the colors of the init() and end()
  ngOnInit(): void {
    this.obteinTasksServer();
  }

  showMoreTasks(task: TasksMain) {
    // console.log(task);
    if (this.calendarButtonColor == "danger") {
      //Delete the main task:
      this.calendarButtonColor = "light";
      this.requestService.modifiedTasks(task, false);
      this.tasks = this.tasks.filter(obj => obj !== task);
    } else {
      //I expand  the main task:
      if (task.expanded)
        task.expanded = false;
      else
        task.expanded = true;
    }

  }
  obteinTasksServer() {

    this.requestService.getTasks().subscribe(
      data => {
        console.log(data);
        for (let d in data)
          this.tasks.push(data[d]);

      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
  }
  editTask() {

  }
  showRemoveButton() {
    this.calendarButtonColor = "danger";
  }
  showAddTaskModal() {
    this.modalCreate();
  }
  async modalCreate() {
    const modal = await this.modalController.create({
      component: CreateTaskPage,
      cssClass: 'my-custom-class',
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
        if (data['data'] != null) {
          let t: TasksMain = data["data"];
          for (let index = 0; index < t.associatedTasks.length; index++)
            t.associatedTasks[index].id_main_task = t.id;
          this.requestService.modifiedTasks(t, true);
          this.tasks.push(data["data"]);
        }

      });
    return await modal.present();
  }

}
