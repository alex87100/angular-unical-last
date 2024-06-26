import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {StudentService} from "../../../core/services/student.service";
import {Student} from "../student.component";

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: [ './student-search.component.css' ]
})
export class StudentSearchComponent implements OnInit {
  private title = StudentSearchComponent.name.toString();
  students$!: Observable<Student[]>;
  private searchTerms = new Subject<string>();

  constructor(private studentService: StudentService) {
  }

  public getTitle(): string {
    return this.title;
  }

  // Push a search term into the observable stream.

  search(term: string): void {
    this.searchTerms.next(term);

  }

  ngOnInit(): void {

    this.students$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.studentService.searchStudents(term)),
    );
  }
}
