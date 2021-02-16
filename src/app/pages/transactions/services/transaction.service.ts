import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(public Firebase: AngularFirestore, private authSvc:AuthService) { }

  createTransanction(transaction : any, type : string){
    this.authSvc.getUid().then((userId) => {
      if(userId != null){
        const clientsCollection = this.Firebase.collection("clients")
        const user = clientsCollection.doc(userId)
        user.collection(type).add(transaction);
        console.log("Transaccion creada exitosamente")
      }else{
        console.log("El usuario no esta logeado")
      }
    })
  }
}
