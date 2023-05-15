import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileModule } from '../profile/profile.module';
import { SharedModule } from '../shared/shared.module';

import { CoursesComponent } from './Views/courses/courses.component';
import { HomeComponent } from './Views/home/home.component';


@NgModule({
  declarations: [
    CoursesComponent,
    HomeComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProfileModule,
    SharedModule
  ],
  exports: [
    CoursesComponent,
    CoursesComponent,
    HomeComponent,
    CoursesComponent
  ]
})
export class PagesModule { }
