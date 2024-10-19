import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'; 
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MathQuizComponent } from './math-quiz/math-quiz.component';
import { EnglishComponent } from './english/english.component';
import { DataStructureQuizComponent } from './data-structure-quiz/data-structure-quiz.component';
import { SoftwareEngineeringQuizComponent } from './software-engineering-quiz/software-engineering-quiz.component';
import { AngularComponent } from './angular/angular.component';
import { IonicComponent } from './ionic/ionic.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'forgot-password', component: ForgotPasswordComponent }, 
  { path: 'math-quiz', component: MathQuizComponent }, 
  { path: 'english', component: EnglishComponent },
  { path: 'data-structure-quiz', component: DataStructureQuizComponent },
  { path: 'software-engineering-quiz', component: SoftwareEngineeringQuizComponent },
  { path:'angular', component: AngularComponent},
  { path: 'ionic', component: IonicComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
