import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassVerifiedPageRoutingModule } from './class-verified-routing.module';

import { ClassVerifiedPage } from './class-verified.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassVerifiedPageRoutingModule
  ],
  declarations: [ClassVerifiedPage]
})
export class ClassVerifiedPageModule {}
