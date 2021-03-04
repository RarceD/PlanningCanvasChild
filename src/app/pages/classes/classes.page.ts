import { Classes } from './../../interfaces/classes';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  public classes: Classes[] =
    [
      {
        id: 1,
        name: "2ºC",
        password: "secretitos",
        image: "../../assets/images/test.jpg"
      },
      {
        id: 2,
        name: "Juan Carlos",
        password: "secretitos",
        image: "../../assets/images/test.jpg"
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
