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

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  selectClass(classItem: Classes) {
    console.log(classItem);
    this.presentModal(classItem.password);

  }
  async presentModal(pass) {
    const modal = await this.modalController.create({
      component: ClassVerifiedPage,
      cssClass: 'my-custom-class' ,
      componentProps: {
        'truePassword': pass    }
    });
    return await modal.present();
  }

}
