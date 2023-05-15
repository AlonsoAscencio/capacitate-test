import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/profile/interfaces/profile.interface';

import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
/* variables */
  titulo: string = 'Con capacitate-Test';
  public usuario?: User;


  constructor( private profileService: ProfileService ) { }

  ngOnInit() {

    this.profileService.loadProfile()
      .subscribe( resp => {

        this.usuario = resp;


    });

  }
}
