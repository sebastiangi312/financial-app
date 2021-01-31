import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { AppRoutingModule } from '../router/app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    CreateTransactionComponent
  ],
  providers: [
    CurrencyPipe 
  ]
})
export class PagesModule { }
