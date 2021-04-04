import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-class-verified',
  templateUrl: './class-verified.page.html',
  styleUrls: ['./class-verified.page.scss'],
})
export class ClassVerifiedPage implements OnInit {
  @Input() truePassword: string;
  public userPass: string;
  constructor(
    public modalController: ModalController,
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  imageSecure = "../../assets/images/security.svg";
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  checkSubmission() {
    // console.log(this.userPass, this.truePassword);
    if (this.userPass == this.truePassword) {
      console.log("Match the pass");
      this.router.navigate(['/groups']);
      this.dismiss();
    }
    else if (this.userPass == "teacher") {
      console.log("You are the teacher");
      localStorage.setItem("user", "teacher");
      this.router.navigate(['/classes']);
      this.dismiss();
    } else {
      this.presentToast();
      this.dismiss();

    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      header: 'WRONG PASSWORDS',
      message: 'Please try one more time',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
