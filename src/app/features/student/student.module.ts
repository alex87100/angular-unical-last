import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import { MatDatepickerModule } from '@angular/material/datepicker';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {StudentComponent} from "./student.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentAddComponent} from "./student-add/student-add.component";
import {StudentSearchComponent} from './student-search/student-search.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {InMemoryDataService} from "../../core/services/in-memory-data.service";
import {StudentService} from "../../core/services/student.service";
import {StudentRoutingModule} from "./student-routing.module";

@NgModule({
    declarations: [
        StudentComponent,
        StudentListComponent,
        StudentAddComponent,
        StudentSearchComponent,
        StudentDetailComponent
    ],
    imports: [
        StudentRoutingModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
        ReactiveFormsModule,
        MatSliderModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatIconModule,
        MatDatepickerModule
    ],
    providers: [

        StudentService
    ],
    exports: [
        //StudentListComponent,
        //StudentAddComponent
    ]
})
export class StudentModule {
}
