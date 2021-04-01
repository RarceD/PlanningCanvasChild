import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Children, TasksMain } from 'src/app/interfaces/tasks';
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

  constructor() {
  }

  public columns: string[] = ["L", "M", "X", "J", "V", "L", "M", "X", "J", "V"]
  public tasks: TasksMain[] =
    [
      {
        id:1,
        text: "TASK SCHEDULE",
        start: 0,
        associatedTasks: [],
        expanded: false
      },
      {
        id:1,

        text: "Main task 1",
        start: 2,
        associatedTasks: [{
          text: "Second Task 1.1",
          color: "success",
          deadline: {
            "lower": 8,
            "upper": 50
          }

        },
        {
          text: "Second Task 1.2",
          color: "tertiary",
          deadline: {
            "lower": 60,
            "upper": 90
          }
        }],
        expanded: false
      },
      {
        id:1,

        text: "Main task 2",
        start: 4,
        associatedTasks:
          [
            {
              text: "Second Task 2.1",
              color: "secondary",
              deadline: {
                upper:4,
                lower:18
              }
            }
          ],
        expanded: false
      },
      {
        id:1,

        text: "Main task 3",
        start: 7,
        associatedTasks:
          [
            {
              text: "Second Task 3.1",
              color: "danger",
              deadline: {
                "lower": 12,
                "upper": 50
              }

            },
            {
              text: "Second Task 3.2",
              color: "primary",
              deadline: {
                "lower": 12,
                "upper": 50
              }
            },
            {
              text: "Second Task 3.3",
              color: "warning",
              deadline: {
                "lower": 12,
                "upper": 50
              }
            }
          ],
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
    console.log("ok")
    // this.tasks[2].associatedTasks[1].deadline=  {
    //   upper:4,
    //   lower:18
    // }
  }
  showMoreTasks(task: TasksMain) {
    console.log(task);
    if (task.expanded)
      task.expanded = false;
    else
      task.expanded = true;
  }
  editTask(secondTask){

  }

}
