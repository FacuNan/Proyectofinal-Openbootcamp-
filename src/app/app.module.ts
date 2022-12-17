import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormLoginComponent } from './components/auth/form-login/form-login.component';
import { RegistroFormComponent } from './components/auth/registro-form/registro-form.component';
import { HomePageComponent } from './components/page/home-page/home-page.component';
import { LoginPageComponent } from './components/page/login-page/login-page.component';
import { RegisterPageComponent } from './components/page/register-page/register-page.component';
import { ErrorFoundComponent } from './components/page/error-found/error-found.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    FormLoginComponent,
    RegistroFormComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
