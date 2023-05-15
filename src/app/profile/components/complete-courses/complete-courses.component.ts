import { Component, OnInit } from '@angular/core';
import { Inscription } from '../../interfaces/profile.interface';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'profile-complete-courses',
  templateUrl: './complete-courses.component.html',
  styleUrls: ['./complete-courses.component.css']
})
export class CompleteCoursesComponent implements OnInit{
  /* variables */
  titulo: string = 'Mis Cursos Completados';
  cursosCompletados: Inscription[] = [];

  constructor( private profileService: ProfileService ) { }

  /* filter courses complete*/
  ngOnInit() {

    this.profileService.loadProfile()
      .subscribe( resp => {
        this.cursosCompletados = resp.inscriptions.filter(inscripcion => inscripcion.advance === 100);
    });

  }
}
