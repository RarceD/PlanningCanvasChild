import { ClassVerifiedPage } from 'src/app/modal/class-verified/class-verified.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }
  loginTeacher(isTeacher: boolean){
    console.log("press the button");
    if (isTeacher){
      this.checkCredentialsTeachers()
    }
  }

  async checkCredentialsTeachers() {
    const modal = await this.modalController.create({
      component: ClassVerifiedPage,
      cssClass: 'my-custom-class',
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
        if (data['data'] != null){
          // let g: Groups = data["data"]
          // this.groups.push(g);
        }
        // this.classes.push(data['data']);
      });
    return await modal.present();
  }

}
