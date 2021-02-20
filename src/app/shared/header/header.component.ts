import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  
  userAux: User = {
    uid: '',
    name: '',
    mail: '',
    balance: 0
  }
  
  constructor(private authSvc: AuthService) { }
  
  public user$: Observable<any> = this.authSvc.auth.user;

   async ngOnInit() {
    const user = await this.authSvc.isAutentication();
    if (user){
      const uid = await this.authSvc.getUid();
      
      this.getUserInfo(uid);
    }
    
    
  }

  logOut(){
    this.authSvc.logOut();
  }

  getUserInfo(uid: any){
    const path ='clients';
    this.authSvc.getDoc(path, uid).subscribe(res => {
      this.userAux = res as User;
      
    })

  }

  
}
