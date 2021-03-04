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
        name: " 2ºA",
        password: "secretitos",
        image: "../../assets/images/test.jpg",
        icon: "brush"
      },
      {
        id: 2,
        name: " 5ºB",
        password: "secretitos",
        image: "../../assets/images/test.jpg",
        icon: "aperture"
      },
      {
        id: 3,
        name: " 1ºB",
        password: "secretitos",
        image: "../../assets/images/test.jpg",
        icon: "paper-plane"
      },
      {
        id: 4,
        name: " 1ºB",
        password: "secretitos",
        image: "../../assets/images/test.jpg",
        icon: "color-palette"
      },
      {
        id: 4,
        name: " 4ºB",
        password: "secretitos",
        image: "../../assets/images/test.jpg",
        icon: "color-fill"
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
