import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private authSvc: AuthService, private router: Router){

    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const user = await this.authSvc.isAutentication();
        if(user){
            
            return true;
        }
        else{
            this.router.navigate(['login']);
            return false;
        }

    }

}