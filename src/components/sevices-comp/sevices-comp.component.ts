import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sevices-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sevices-comp.component.html',
  styleUrl: './sevices-comp.component.scss',
})
export class SevicesCompComponent {
  datas: Array<any> = [
    {
      title: 'search engine ',
      title2: 'optimization',
      imgPath: '../../assets/seo.png',
      color: 'white',
    },
    {
      title: 'Pay-per-click ',
      title2: 'advertising',
      imgPath: '../../assets/payperclick.png',
      color: 'green',
    },
    {
      title: 'Social Media ',
      title2: 'Marketing',
      imgPath: '../../assets/socialmediamarketing.png',
      color: 'dark',
    },
    {
      title: 'Email ',
      title2: 'Marketing',
      imgPath: '../../assets/emailmarketing.png',
      color: 'white',
    },
    {
      title: 'content  ',
      title2: 'creation',
      imgPath: '../../assets/contentcreation.png',
      color: 'green',
    },
    {
      title: 'Analytics and  ',
      title2: 'Tracking',
      imgPath: '../../assets/analytics.png',
      color: 'dark',
    },
  ];
}
