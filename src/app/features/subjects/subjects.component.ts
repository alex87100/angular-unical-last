import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './subjects.component.html',
  styleUrls: [ './subjetcs.component.css' ]
})
export class SubjectsComponent implements OnInit {
  protected title = "SubjectsComponent using bootstrap grid system";
  subjects: string[] = ['Math', 'Science', 'History', 'English', 'Physical Education', 'Art', 'Music', 'Geography', 'Computer Science'];

  constructor() { }

  ngOnInit(): void {
  }
}
