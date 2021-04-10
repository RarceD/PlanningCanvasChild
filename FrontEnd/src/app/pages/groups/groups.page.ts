import { CreateGroupPage } from './../../modal/create-group/create-group.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Groups } from 'src/app/interfaces/groups';
import { RequestsService } from 'src/app/services/requests.service';
import { ClassVerifiedPage } from 'src/app/modal/class-verified/class-verified.page';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  public groups: Groups[] = [
    // {
    //   id: 1,
    //   name: "Azules",
    //   image: "../../assets/images/group_1.svg",
    // },
    // {
    //   id: 2,
    //   name: "Violetas",
    //   image: "../../assets/images/group_2.svg",
    // },
    // {
    //   id: 3,
    //   name: "Rojo",
    //   image: "../../assets/images/group_3.svg",
    // },
    // {
    //   id: 4,
    //   name: "Verde",
    //   image: "../../assets/images/group_4.svg",
    // },

  ]
  public deleteGroup: boolean = false;
  constructor(
    public modalController: ModalController,
    private requestService: RequestsService
  ) { }

  ngOnInit() {
    this.obteidGroupsBackend();
  }

  obteidGroupsBackend() {

    this.requestService.getGroups().subscribe(
      data => {
        console.log(data);
        for (let g in data)
          this.groups.push(data[g]);
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )

  }

  createGroup() {
    this.createClass();
  }
  removeGroup(deleteGroupData: Groups, action: boolean) {
    let user = localStorage.getItem("user");
    if (user == "teacher") {
      this.deleteGroup = !this.deleteGroup;
      this.groups = this.groups.filter(obj => obj !== deleteGroupData);
      this.requestService.modifiedGroups(deleteGroupData, false);
      // if (action){
      //   this.verifiedIfTeacher("a", deleteGroupData);
      // }
    }
  }

  async createClass() {
    const modal = await this.modalController.create({
      component: CreateGroupPage,
      cssClass: 'my-custom-class',
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data['data'] != null) {
          let g: Groups = data["data"]
          this.groups.push(g);
          this.requestService.modifiedGroups(g, true);
        }
        // this.classes.push(data['data']);
      });
      return await modal.present();
    }

    async verifiedIfTeacher(pass, deleteGroupData) {
      const modal = await this.modalController.create({
        component: ClassVerifiedPage,
        cssClass: 'my-custom-class',
      componentProps: { 'truePassword': pass }
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
        if (data['data'] != null)
        if (deleteGroupData != null){
          this.requestService.modifiedGroups(deleteGroupData, false);
          this.groups = this.groups.filter(obj => obj !== deleteGroupData);

        }
      });

    return await modal.present();

  }


}
