import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  protected title = "StudentComponent";
}

export interface Student {
  id: number;
  fiscalCode: string;
  name: string;
  surname: string;
  date: string;

}
