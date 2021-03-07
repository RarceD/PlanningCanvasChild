import { Classes } from './../../interfaces/classes';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage implements OnInit {

  public class: Classes =
    {
      icon: "",
      id: 0,
      image: "",
      name: "",
      password: "",
    }

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(action) {
    if (action){
      this.class.image = "../../assets/images/class_e.svg";
      this.class.icon = "add";
      this.modalController.dismiss(this.class);
    }
    this.modalController.dismiss();
  }

}
