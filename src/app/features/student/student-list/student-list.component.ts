import {Component, OnInit, ViewChild, Inject, Input} from '@angular/core';
import {MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import {Student} from "../student.component";
import {StudentService} from "../../../core/services/student.service";
import {StudentAddComponent} from "../student-add/student-add.component";


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  private title = StudentListComponent.name.toString();
  displayedColumns: string[] = ['id','fiscal','name','surname','dateOfBirth','delete'];
  students: Student[] = [];


  @Input() student?: Student;
  @ViewChild(MatTable)  table!: MatTable<Student>;

  constructor(private studentService: StudentService,public dialog: MatDialog) {
  }

  public getTitle() {
    return this.title;
  }

  ngOnInit(): void {

    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  removeData(student: Student): void {
    //this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();

    this.students = this.students.filter(h => h !== student);
    this.table.renderRows();
  }

  addData(student: Student): void {
    //this.students = this.students.filter(h => h !== student);
    this.studentService.addStudent(student).subscribe();

    this.students = this.students.filter(h => h !== student);
    this.table.renderRows();


    /*delete(student: Student): void {
        this.students = this.students.filter(h => h !== student);
        this.studentService.deleteStudent(student.id).subscribe();
    }*/
  }

  openDialog(): void {
    this.dialog.open(StudentAddComponent, {
      width: '260px',
    });

  }





}

