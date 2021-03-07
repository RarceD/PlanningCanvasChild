import { Component, OnInit } from '@angular/core';
import { Groups } from 'src/app/interfaces/groups';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  public groups: Groups[] = [
    {
      id: 1,
      name: "Azules",
      image: "../../assets/images/group_1.svg",
    },
    {
      id: 2,
      name: "Negros",
      image: "../../assets/images/group_2.svg",
    },
    {
      id: 3,
      name: "Rojo",
      image: "../../assets/images/group_3.svg",
    },
    {
      id: 4,
      name: "Verde",
      image: "../../assets/images/group_4.svg",
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
