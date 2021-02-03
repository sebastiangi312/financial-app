import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ProfitComponent } from '../pages/transactions/profit/profit.component';
import { SpendComponent } from '../pages/transactions/spend/spend.component';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: 'profit', component: ProfitComponent},
  {path: 'spend', component: SpendComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
