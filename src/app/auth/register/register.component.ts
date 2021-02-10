
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
  }

  register() {
    const {name, email, password} = this.registerForm.value
    this.authSvc.register(email, password)
  }

}
