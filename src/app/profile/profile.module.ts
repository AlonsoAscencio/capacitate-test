import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


import { ProfileDescriptionComponent } from './pages/profile-description/profile-description.component';
import { ActiveCoursesComponent } from './components/active-courses/active-courses.component';
import { InfoComponent } from './components/info/info.component';
import { CompleteCoursesComponent } from './components/complete-courses/complete-courses.component';



@NgModule({
  declarations: [
    ProfileDescriptionComponent,
    ActiveCoursesComponent,
    InfoComponent,
    CompleteCoursesComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    ProfileDescriptionComponent,
    ActiveCoursesComponent,
    InfoComponent,
    CompleteCoursesComponent
  ]
})
export class ProfileModule { }
