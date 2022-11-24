import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../student.component";
import {StudentService} from "../../../core/services/student.service";
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  private _title=StudentAddComponent.name.toString();
  student: Student | undefined;
  students: Student[] = [];

  controlName = new FormControl('', [Validators.required] );
  controlSurname = new FormControl('', [Validators.required] );
  controlDate = new FormControl('', [Validators.required] );
  controlFiscal = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$")] );

  //[Validators.required, Validators.maxLength(15), Validators.pattern('^[A-Z]{6}\\d{2}[A-Z]\\d{2}[A-Z]\\d{3}[A-Z]$')  ]

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getErrorMessageFiscal() {
    if (this.controlFiscal.hasError('required')) {
      return 'Fiscal is required';
    }
    return this.controlFiscal.hasError('pattern') ? 'Not a valid fiscal' : '';
  }

  getErrorMessageName() {
    return this.controlName.hasError('required') ? 'Name is required' : '';
  }

  getErrorMessageSurname() {
    return this.controlSurname.hasError('required') ? 'Surname is required' : '';
  }

  getErrorMessageDate() {
    return this.controlDate.hasError('required') ? 'Date is required' : '';
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  add(fiscalCode: string, name: string, surname: string, date: string): void {
    console.log(fiscalCode,name,surname,date);
    name = name.trim();
    surname = surname.trim();
    if (!name) {
      return;
    }

    //let
    var date1 = date.substring(0, 10);
    var time = date.substring(11, 16);
    //var
    var splitString = date1.split("-");
    var reverseArray = splitString.reverse();
    date1 = reverseArray.join("-");
    //console.log("date",date1);
    //console.log("time",time);
    date = date1+" "+time;
    console.log("final",date);
    let upperFiscal = fiscalCode.toUpperCase();
    this.studentService.addStudent({fiscalCode,name, surname,date} as Student).subscribe(student => {
      this.students.push(student);
      //this.students = this.students.filter(h => h !==  student );
    });


    //this.students = this.students.filter(h => h !==  this.student );



  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
