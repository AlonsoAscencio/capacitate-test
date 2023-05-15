import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/profile/interfaces/profile.interface';

import { ProfileService } from 'src/app/profile/services/profile.service';


@Component({
  selector: 'pages-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
/* variables */
  titulo: string = 'conoce nuestros cursos';
  public cursos: Inscription[] = [];


  constructor( private profileService: ProfileService ) { }

  ngOnInit() {

    this.profileService.loadProfile()
      .subscribe( resp => {
        this.cursos = resp.inscriptions;
    });
  }

}
