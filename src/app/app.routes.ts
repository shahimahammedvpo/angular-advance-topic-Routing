import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent,canActivate:[authGuard]},
    {path:'dashboard/:username',component:DashboardComponent},
    {path:'**',redirectTo:'login'}
];
