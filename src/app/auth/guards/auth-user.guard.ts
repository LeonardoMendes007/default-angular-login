import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(state.url == '/login'){

      if(!this.authService.loginIsValid){
        return true;
      }else{
        this.router.navigate(['']);
        return false;
      }

    }

    if(this.authService.loginIsValid){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }

    
    
  }

  
  
}
