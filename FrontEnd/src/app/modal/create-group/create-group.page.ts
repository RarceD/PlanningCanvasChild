import { Groups } from 'src/app/interfaces/groups';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
  public group: Groups =
    {
      id: 1,
      image: "",
      name: ""
    }
  public teacherPassword: string = "";
  constructor(public modalController: ModalController,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  dismiss(action) {
    if (action) {
      if (this.teacherPassword == "teacher")
        this.modalController.dismiss(this.group);
      else
        this.presentToast()
    }
    this.modalController.dismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'WRONG PASSWORDS',
      message: 'You are not the teacher',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
