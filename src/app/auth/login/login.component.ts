import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  })

  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    const {email, password} = this.loginForm.value
    this.authSvc.login(email, password);   
  }

  
  


}
