import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatSelectModule} from '@angular/material/select'; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './page/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './page/admin/sidebar/sidebar.component';
import {  WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './page/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './page/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './page/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './page/admin/add-quiz/add-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,   
    WelcomeComponent, ViewCategoriesComponent, AddCategoriesComponent, ViewQuizzesComponent, AddQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
