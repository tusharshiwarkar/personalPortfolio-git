import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:Project[]=[
    {
      title:'Farmers Portal',
      technologies:'HTML,CSS3,Angular,Angular Material,Typescript',
      description:[
          'Worked with team to develop website for young generation farmers.',
          'This is web project as name is farmers portal. which is tells us the best condition of soil, best seeds and also great market place, also tells us which crop is best for that soil. suggest braned seeds to the young generation farmers.',
          'Built the services of market places that can be used for young generation farmers.'
      ],
    },
    {
      title:'E-Commerce Web Project',
      technologies:'HTML,CSS3,Angular 14,Typescript,JSON',
      description:[
          'An ecommerce website allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases.',
          'In our project E-commerce associates ensure that online stores are visually appealing, easy to navigate, and furnished with accurate, up-to-date content.',
          'In this project enables you to easily, creatively, and attractively move your physical store online.',
          'In this is project we are useing angular 14 version which loads the website very fast and easy to use.'
      ],
    },


  ];

}
