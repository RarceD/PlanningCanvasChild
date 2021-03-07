import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassVerifiedPage } from './class-verified.page';

const routes: Routes = [
  {
    path: '',
    component: ClassVerifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassVerifiedPageRoutingModule {}
