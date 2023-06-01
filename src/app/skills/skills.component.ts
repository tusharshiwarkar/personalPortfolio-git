import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name:'HTML, CSS, Bootstrap',
      level:'Expert',
      rating: 90,
    },
    {
      name:'JavaScript',
      level:'Expert',
      rating: 85,
    },
    {
      name:'Angular, Angular Material',
      level:'Intermediate',
      rating: 75,
    },
    {
      name:'SQL-MySQL',
      level:'Intermediate',
      rating: 70,
    },
    {
      name:'React-JS',
      level:'Intermediate',
      rating: 60,
    },
    {
      name:'Core-Java',
      level:'Intermediate',
      rating: 70,
    },


  ]
}
