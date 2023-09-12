import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { SignupComponent } from './page/signup/signup.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';
import { ProfileComponent } from './page/profile/profile.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './page/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './page/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './page/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './page/admin/add-quiz/add-quiz.component';



const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

 {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate: [adminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'view-categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-categories',
        component:AddCategoriesComponent,
      },
      {
        path:'view-quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      }
    ],
  
  },
  {
    path:'user',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate: [normalGuard],

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
