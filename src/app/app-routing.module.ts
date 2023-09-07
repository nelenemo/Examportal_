import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { SignupComponent } from './page/signup/signup.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';



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
    pathMatch:'full',
    canActivate: [adminGuard],
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
