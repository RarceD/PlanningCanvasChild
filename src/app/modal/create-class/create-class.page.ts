import { Classes } from './../../interfaces/classes';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.page.html',
  styleUrls: ['./create-class.page.scss'],
})
export class CreateClassPage implements OnInit {
  @Input() classToEdit: Classes;
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
    console.log(this.classToEdit)
    if (this.classToEdit != null)
      this.class = this.classToEdit;
  }

  dismiss(action) {
    if (action) {
      if (this.classToEdit == null) {

        this.class.image = "../../assets/images/class_e.svg";
        this.class.icon = "add";
      } else {
        this.classToEdit = this.class;
      }
      this.modalController.dismiss(this.class);
    }
    this.modalController.dismiss();
  }

}
