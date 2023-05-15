import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../profile/services/profile.service';
import { User } from 'src/app/profile/interfaces/profile.interface';


@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /* variables */
  public usuario?: User;
  public nombre: any = [];

  constructor( private profileService: ProfileService ) { }

  /* function name & email request */
  ngOnInit() {

    this.profileService.loadProfile()
      .subscribe( resp => {

        this.usuario = resp;
        this.nombre = resp.people[0];
     });

  }

}
