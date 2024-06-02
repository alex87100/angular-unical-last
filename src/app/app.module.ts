import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {HeaderComponent} from './layout/header/header.component';
import {StudentModule} from "./features/student/student.module";
import { SubjectsComponent } from './features/subjects/subjects.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    AppRoutingModule,
    StudentModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectsComponent,
    DashboardComponent
  ],
  exports: [
    MatCardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
