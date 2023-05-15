import { Component, OnInit} from '@angular/core';
import { Inscription, User } from '../../interfaces/profile.interface';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'profile-active-courses',
  templateUrl: './active-courses.component.html',
  styleUrls: ['./active-courses.component.css']
})
export class ActiveCoursesComponent implements OnInit{
  /* variables */
  titulo: string = 'Mis Cursos en Proceso';
  cursosEnProgreso: Inscription[] = [];

  constructor( private profileService: ProfileService ) { }

  /* filter courses in progress*/
  ngOnInit() {

    this.profileService.loadProfile()
      .subscribe( resp => {
        this.cursosEnProgreso  = resp.inscriptions.filter(inscripcion => inscripcion.advance >0 && inscripcion.advance < 100);

    });

  }
}


