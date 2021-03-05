import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-class-verified',
  templateUrl: './class-verified.page.html',
  styleUrls: ['./class-verified.page.scss'],
})
export class ClassVerifiedPage implements OnInit {
  @Input() truePassword: string;
  public userPass: string;
  constructor(public modalController: ModalController) { }

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
    console.log(this.userPass, this.truePassword);
    if (this.userPass == this.truePassword)
      console.log("Match the pass");
    else
      console.log("Fail the pass");
    this.dismiss();

  }
}
