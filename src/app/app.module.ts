import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { LoginGuardian } from './auth/login/login-guardian.service';
import { AuthService } from './auth/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [LoginGuardian,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
