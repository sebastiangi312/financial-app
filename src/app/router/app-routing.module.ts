import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateTransactionComponent} from '../pages/create-transaction/create-transaction.component';

const routes: Routes = [
  {path: 'Transaccion', component: CreateTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
