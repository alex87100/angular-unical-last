import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {HeaderComponent} from './layout/header/header.component';
import {StudentModule} from "./features/student/student.module";

@NgModule({
  imports: [
    AppRoutingModule,
    StudentModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent
  ],
  exports: [
    MatCardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
