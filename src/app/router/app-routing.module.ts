import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

import { ProfitComponent } from '../pages/transactions/profit/profit.component';
import { SpendComponent } from '../pages/transactions/spend/spend.component';
import { LoginGuardian } from '../auth/login/login-guardian.service';
import { ProfileComponent } from '../pages/profile/profile.component';


const routes: Routes = [
  
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  

  {path: 'profit', component: ProfitComponent, canActivate:[LoginGuardian]},
  {path: 'spend', component: SpendComponent,  canActivate:[LoginGuardian]},
  {path: 'profile', component: ProfileComponent,  canActivate:[LoginGuardian]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
