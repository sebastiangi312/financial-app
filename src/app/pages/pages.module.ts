import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from '../router/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfitComponent } from './transactions/profit/profit.component';
import { SpendComponent } from './transactions/spend/spend.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfitComponent,
    SpendComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    CurrencyPipe 
  ]
})
export class PagesModule { }
