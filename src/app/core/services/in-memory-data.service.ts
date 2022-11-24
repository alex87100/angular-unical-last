import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Student} from "../../features/student/student.component";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1, fiscalCode: 'PSTCIO90R20D086J', name: 'Ciccio', surname: 'Pasticcio' , date: "10-02-1999"  },
      { id: 2, fiscalCode: 'IMBRNT95R22D086T', name: 'Ciccio', surname: 'Imbranata', date:  "10-11-2000"  }
    ];
    return {students};
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }


}
