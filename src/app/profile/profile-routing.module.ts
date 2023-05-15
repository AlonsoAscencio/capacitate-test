import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDescriptionComponent } from './pages/profile-description/profile-description.component';


const routes: Routes = [
  {
    path: 'profile',
    component:ProfileDescriptionComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild (routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProfileRoutingModule { }
