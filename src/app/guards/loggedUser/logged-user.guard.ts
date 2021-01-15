import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FireauthService } from 'src/app/core/services/fireauth/fireauth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserGuard implements CanActivate {
  
  constructor(private authSvc: FireauthService, private route:Router){}
  async canActivate(){
    const user = await this.authSvc.getUserAuth();
    if(user !== null){
      this.route.navigate(['/matchmaking/home']);
      return false;
    }
    return true;
  }
  
}
