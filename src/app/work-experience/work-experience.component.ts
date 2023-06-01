import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
    workExpList: WorkExperience[] = [
      {
        role: 'Associate Software Engineer',
        company: 'Bristlecone',
        duration: 'feb 2022 - Sep 2022',
        description:[
           'Producing, maintaining and modifying websites and user interfaces.',
           'Developed user interface with modern JavaScript frameworks.',
           'Worked on different technologies such as (HTML5, CSS3, JavaScript, Angular, MySQL, Bootstrap, Core Java)',
           'Developed user interface with morden JavaScript framework, HTML5, CSS3.',
           'Created accessible, responsive and functional user interface to allow visitor on any device.',
           'Design and develop website using HTML5, CSS3, Angular.',
           'Build mockup design wireframes for landing pages using figma.',
           'Good understanding of core java programming and MySQL databases.',
           'Good knowledge about Bootstrap.',
           'Good understanding about MS-Office.'
        ],
      },
    ];




}
