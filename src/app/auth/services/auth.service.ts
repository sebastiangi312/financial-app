

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(public auth: AngularFireAuth) { }

  
  login(email: string, password: string){
    // try {
    //   const result = this.auth.signInWithEmailAndPassword(email, password);
    //   return result;
    //   }
    // catch(error){
    //   console.log(error);
    // }
    const result = this.auth.signInWithEmailAndPassword(email, password);
    return result;

  }
  
  register(email: string, password: string){
    // try{
    //   const result = this.auth.createUserWithEmailAndPassword(email, password);
    //   return result;
    // }
    // catch(error){
    //   console.log(error)
    // }
    const result = this.auth.createUserWithEmailAndPassword(email, password);
    return result;
  }
  

  
    
  
  
}
