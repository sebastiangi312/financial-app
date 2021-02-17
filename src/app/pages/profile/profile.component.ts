import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: User = {
    uid: '',
    name: '',
    mail: '',
    balance: 0
  }
  
  constructor(public auth : AuthService) { }

  async ngOnInit() {
    const uid = await this.auth.getUid();
    console.log(uid)
    this.getUserInfo(uid)
    
  }

  getUserInfo(uid: any){
    const path ='clients';
    this.auth.getDoc(path, uid).subscribe(res => {
      this.user = res as User;
      
    })

  }

}
