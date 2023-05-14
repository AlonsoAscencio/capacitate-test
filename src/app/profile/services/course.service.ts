import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inscription } from '../interfaces/profile.interface';



@Injectable({providedIn: 'root'})

export class CourseService {

  constructor(private http: HttpClient) { }

  public

  loadCourse() {
    const url = 'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport'

    return this.http.get<Inscription[]>( url )
  }


}
