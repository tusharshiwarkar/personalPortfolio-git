import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
   myData: string[][] = [
    ['Name', 'Tushar Shiwarkar'],
    ['DOB', '23/07/1996'],
    ['Work Exp', '08 Months'],
    ['Education', 'BE(IT)'],
    ['Interests','Football'],
   ];

   aboutMe: string[]=[
    'Hi, I am a Software Engineer with 8 months of experience in software industry.',
    'Worked as Associate Software Engineer In Bristlecone for Frontend technologies',
    'Always eager to learn new technologies.',
    'Seeking a challenging position in a reputable organization to expand and utilize my learning, skills and knowledge.',
    'I have  great foundation of technical skills that I would bring to role along with my drive and work ethic.'
   ];

  constructor(){}

  ngOnInit(): void{

  }
}
