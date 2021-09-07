import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { StudentComponent } from './MyStudent/student/student.component';
import { HompageComponent } from './user/hompage/hompage.component';
// import { NavbarComponent } from './user/user/navbar/navbar.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './MyStudent/login-form/login-form.component';
import { NavbarComponent } from './MyStudent/navbar/navbar.component';
import { MessageService } from './message.service';
import { WarningComponent } from './warning/warning.component';
import { SucessComponent } from './sucess/sucess.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { NewProjectComponent } from './new-project/new-project.component';



@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    // NavbarComponent,
    SidebarComponent,
    LoginFormComponent,
    NavbarComponent,
    WarningComponent,
    SucessComponent,
    RecruiterComponent,
    NewProjectComponent,
    
    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
