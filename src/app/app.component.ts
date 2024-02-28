import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from '../components/banner/banner.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SevicesCompComponent } from '../components/sevices-comp/sevices-comp.component';
import { FormCompComponent } from '../components/form-comp/form-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    RouterOutlet,
    BannerComponent,
    NavbarComponent,
    SevicesCompComponent,
    FormCompComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'positivus-website';
}
