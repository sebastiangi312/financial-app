
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    uid: '',
    name: '',
    mail: '',
    balance: 0
  }
 
  registerForm = new FormGroup({
    
    name : new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),

    
  })
   
  constructor(private authSvc:AuthService, public Firebase: AngularFirestore) { }

  ngOnInit(): void {
    
    
  }

  async register() {
    const {name, email, password} = this.registerForm.value
    this.user.mail = email
    this.user.name = name
    const res = await this.authSvc.register(email, password);
    const uid = await this.authSvc.getUid();
    this.user.uid = uid;
    this.saveUser()
   
    
    

    
    

  }

  async saveUser(){
    this.authSvc.createDoc(this.user, 'clients', this.user.uid).then(res => {
      console.log("Guardado");
    })
    
    
  }


  

}
