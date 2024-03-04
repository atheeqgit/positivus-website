import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { SevicesCompComponent } from '../sevices-comp/sevices-comp.component';
import { FormCompComponent } from '../form-comp/form-comp.component';

@Component({
  selector: 'app-about-comp',
  standalone: true,

  imports: [BannerComponent, SevicesCompComponent, FormCompComponent],
  templateUrl: './about-comp.component.html',
  styleUrl: './about-comp.component.scss',
})
export class AboutCompComponent {}
