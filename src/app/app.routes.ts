import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { AboutCompComponent } from '../components/about-comp/about-comp.component';

export const routes: Routes = [
  { path: '', component: AboutCompComponent },
  { path: 'about', component: AboutComponent },
];
