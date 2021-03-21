import { RequestsService } from './../../services/requests.service';
import { CreateClassPage } from './../../modal/create-class/create-class.page';
import { ClassVerifiedPage } from './../../modal/class-verified/class-verified.page';
import { Classes } from './../../interfaces/classes';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
        name: " 2ºA ",
        password: "a",
        image: "../../assets/images/class_e.svg",
        icon: "brush"
      },
      {
        id: 2,
        name: " 5ºB",
        password: "b",
        image: "../../assets/images/class_a.svg",
        icon: "aperture"
      },
      {
        id: 3,
        name: " 1ºB",
        password: "c",
        image: "../../assets/images/class_b.svg",
        icon: "paper-plane"
      },
      {
        id: 4,
        name: " 1ºB",
        password: "c",
        image: "../../assets/images/class_c.svg",
        icon: "color-palette"
      },
      {
        id: 5,
        name: " 4ºB",
        password: "d",
        image: "../../assets/images/class_d.svg",
        icon: "color-fill"
      },
      {
        id: 6,
        name: " 3ºA",
        password: "f",
        image: "../../assets/images/class_f.svg",
        icon: "color-fill"
      },
    ];
  public showRemoveButton: boolean = false;
  public showEditButton: boolean = false;
  constructor(
    public modalController: ModalController,
    private requestService: RequestsService
  ) { }

  ngOnInit() {
    this.obteidClassesBackend();
  }

  obteidClassesBackend() {
    console.log("in")
    this.requestService.getClass().subscribe(
      data => {
        console.log(data)
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )

  }

  selectClass(classItem: Classes) {
    console.log(classItem);
    this.presentModal(classItem.password);

  }
  async presentModal(pass) {
    const modal = await this.modalController.create({
      component: ClassVerifiedPage,
      cssClass: 'my-custom-class',
      componentProps: { 'truePassword': pass }
    });
    return await modal.present();
  }
  async createClass() {
    const modal = await this.modalController.create({
      component: CreateClassPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nop': 1
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
        if (data['data'] != null)
          this.classes.push(data['data']);
      });
    return await modal.present();
  }
  removeClass(deleteClass) {
    if (deleteClass)
      this.showRemoveButton = true;
    else
      this.showEditButton = true;
  }

  async modifiedClasses(item, deleteItem) {
    this.showEditButton = false;
    this.showRemoveButton = false;
    if (deleteItem) {
      this.classes = this.classes.filter(obj => obj !== this.classes[item]);
    }
    else {
      const modal = await this.modalController.create({
        component: CreateClassPage,
        cssClass: 'my-custom-class',
        componentProps: {
          'classToEdit': this.classes[item]
        }
      });
      modal.onDidDismiss()
        .then((data) => {
          console.log(data['data']);
          if (data['data'] != null) {
            let addMoreItem = true;
            for (let c of this.classes) {
              if (c.name == data['data'].name) {
                c = data['data']
                addMoreItem = false;
              }
            }
            if (addMoreItem)
              this.classes.push(data['data']);
          }


        });
      return await modal.present();
    }

  }


}




