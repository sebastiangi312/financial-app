

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  

  constructor(public auth: AngularFireAuth, private router: Router) { 
    
  }
  
  
  login(email: string, password: string){
    // try {
    //   const result = this.auth.signInWithEmailAndPassword(email, password);
    //   return result;
    //   }
    // catch(error){
    //   console.log(error);
    // }
     this.auth.signInWithEmailAndPassword(email, password).then(
      ()=> this.router.navigate(['/'])
    )
    

  }
  
  register(email: string, password: string){
    // try{
    //   const result = this.auth.createUserWithEmailAndPassword(email, password);
    //   return result;
    // }
    // catch(error){
    //   console.log(error)
    // }
    this.auth.createUserWithEmailAndPassword(email, password).then(
      ()=> this.router.navigate(['/'])
    )
    
  }
  logOut() {
    this.auth.signOut().then(
      ()=> this.router.navigate(['/'])
    )
  }
  
  isAutentication(){
    const user = this.auth.authState.pipe(first()).toPromise();
    return user
  }



  
    
  
  
}
