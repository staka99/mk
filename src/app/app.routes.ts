import { Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { AboutComponent } from './about/about.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { TerminComponent } from './termin/termin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'o-nama', component: AboutComponent },
  { path: 'termin', component: TerminComponent },
  { path: 'galerija', component: GalerijaComponent },
  { path: 'kontakt', component: KontaktComponent },
];
