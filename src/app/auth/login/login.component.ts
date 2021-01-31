import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    const {email, password} = this.loginForm.value
    this.authSvc.login(email, password);
    console.log("Te has logeado")
  }

}
