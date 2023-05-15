import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/profile.interface';



@Injectable({providedIn: 'root'})

export class ProfileService {

  constructor(private http: HttpClient) { }

  /* function http request*/
  loadProfile() {
    const url = 'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport'

    return this.http.get<User>( url )
  }


}
