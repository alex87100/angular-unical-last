import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentModule} from "./student.module";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentSearchComponent} from "./student-search/student-search.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentComponent} from "./student.component";


export const ROUTES: Routes = [
    {path: "studenti", component: StudentComponent},
    {path: "list", component: StudentListComponent},
    {path: 'studentDetail/:id', component: StudentDetailComponent},

];

@NgModule({
    imports: [RouterModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
    providers: []
})
export class StudentRoutingModule {
}
