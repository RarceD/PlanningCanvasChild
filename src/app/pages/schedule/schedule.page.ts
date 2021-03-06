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

  public columns: string[] = ["L", "M", "X", "J", "V", "L", "M", "X", "J", "V",]
  public tasks: TasksMain[] =
    [
      {
        text: "Main task 1",
        start: 2,
        associatedTasks:
          [
            {
              text: "Second Task 1.1",
            },
            {
              text: "Second Task 1.2",
            }
          ]
      },
      {
        text: "Main  2",
        start: 4,
        associatedTasks:
          [
            {
              text: "Second Task 2.1",
            }
          ]
      },
      {
        text: "Main task 3 long",
        start: 7,
        associatedTasks:
          [
            {
              text: "Second Task 3.1",
            },
            {
              text: "Second Task 3.2",
            },
            {
              text: "Second Task 3.3",
            }
          ]
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
        color: "primary"
      },
      {
        name: "Erica",
        color: "warning"
      },
    ]
  ngOnInit(): void {
    console.log("ok")
  }
  onSelectRed(row) {
    console.log(row);
  }

  onSelectBlue(value) {
    console.log(value);
  }

}
