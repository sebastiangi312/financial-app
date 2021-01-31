import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateTransactionComponent} from '../pages/create-transaction/create-transaction.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: 'Transaccion', component: CreateTransactionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
