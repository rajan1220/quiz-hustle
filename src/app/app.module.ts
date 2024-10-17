import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MathQuizComponent } from './math-quiz/math-quiz.component';
import { DataStructureQuizComponent } from './data-structure-quiz/data-structure-quiz.component';
import { SoftwareEngineeringQuizComponent } from './software-engineering-quiz/software-engineering-quiz.component';
import { EnglishComponent } from './english/english.component';
import { AngularComponent } from './angular/angular.component';
import { IonicComponent } from './ionic/ionic.component';
import { PythonComponent } from './python/python.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ForgotPasswordComponent,
    MathQuizComponent,
    DataStructureQuizComponent,
    SoftwareEngineeringQuizComponent,
    EnglishComponent,
    AngularComponent,
    IonicComponent,
    PythonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
