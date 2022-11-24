import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {StudentService} from "../../../core/services/student.service";
import {Student} from "../student.component";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: [ './student-detail.component.css' ]
})
export class StudentDetailComponent implements OnInit {
  title = 'Dettagli Studente';
  @Input() student?: Student;

  constructor(private studentService: StudentService,private route: ActivatedRoute,private location: Location) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.studentService.getStudent(id).subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.student) {
      this.studentService.updateStudent(this.student)
          .subscribe(() => this.goBack());
    }
  }

}
