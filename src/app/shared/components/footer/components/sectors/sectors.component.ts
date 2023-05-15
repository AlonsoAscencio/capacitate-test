import { Component, OnInit } from '@angular/core';
import { Inscription, Sector } from 'src/app/profile/interfaces/profile.interface';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'footer-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit{
  /* variables */
  titulo: string = 'sectores';
  public sectores: Sector[] = [];
  constructor( private profileService: ProfileService ) { }

  /* function of filtered and repeated sectors*/
  ngOnInit() {

    this.profileService.loadProfile().subscribe(resp => {
      this.sectores = resp.inscriptions.map(i => i.course.sector)
        .reduce((acumulador: Sector[], actual: Sector) => {
          const sectorExistente = acumulador.find(s => s.id === actual.id);
          if (!sectorExistente) {
            acumulador.push(actual);
          }
          return acumulador;
        }, []);
    });
  }

}
