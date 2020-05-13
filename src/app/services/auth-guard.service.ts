import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router,

    private authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot){
    if(this.authService.isLoggedIn()) return true;
    
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
