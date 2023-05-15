import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialNetworksComponent } from './components/footer/components/social-networks/social-networks.component';
import { AboutUsComponent } from './components/footer/components/about-us/about-us.component';
import { SectorsComponent } from './components/footer/components/sectors/sectors.component';






@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialNetworksComponent,
    AboutUsComponent,
    SectorsComponent,


  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
