import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
  {
    institute:'Sant Gadge Baba Amravati University',
    course:'Bachelor of Engineering',
    duration:'2021',
    score:'CGPA- 9.89',
  },
  {
    institute:'S.J.G.S.M College, Wardha',
    course:'HSC',
    duration:'2014',
    score:'50%',
  },
  {
    institute:'Lok Vidyalya, Wardha',
    course:'SSC',
    duration:'2012',
    score:'72.36%',
  }
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
