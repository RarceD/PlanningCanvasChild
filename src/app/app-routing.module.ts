import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full'
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'class-verified',
    loadChildren: () => import('./modal/class-verified/class-verified.module').then( m => m.ClassVerifiedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
