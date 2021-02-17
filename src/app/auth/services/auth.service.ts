

import { Injectable, Input } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
 
  

  constructor(public auth: AngularFireAuth, private router: Router, public Firebase: AngularFirestore) { 
    
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
    return this.auth.createUserWithEmailAndPassword(email, password).then(
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
  
  async getUid(){
    const user = await this.auth.currentUser;
    if (user === null){
      return null
    }
    else{
      return user.uid;
    }
  }
 
  createDoc(data: any, path: string, id: string){
    const collection = this.Firebase.collection(path);
    return collection.doc(id).set(data);
  }

  getDoc(path: string, id: any){
    const collection = this.Firebase.collection(path);
    return collection.doc(id).valueChanges();
  }

  
  
}
