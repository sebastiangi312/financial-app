import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  

  constructor(private authSvc: AuthService) { }
  
  public user$: Observable<any> = this.authSvc.auth.user;

  ngOnInit(): void {
    const user =  this.authSvc

  }

  logOut(){
    this.authSvc.logOut();
  }

  
}
