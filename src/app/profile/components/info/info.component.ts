import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import { User } from '../../interfaces/profile.interface';

@Component({
  selector: 'profile-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  public usuario?: User;
  public nombre: any = [];


  constructor( private profileService: ProfileService ) { }

  ngOnInit() {

    this.profileService.loadProfile()
      .subscribe( resp => {

        this.usuario = resp;
        this.nombre = resp.people[0];


        console.log(this.nombre);


    });
  }

}
