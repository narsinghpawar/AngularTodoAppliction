import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodeAuthenticationService: HardcodeAuthenticationService,
    private router: Router) { 
    console.log('router......');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodeAuthenticationService.isUserLoggedIn())
     // console.log('if-condition.....')
      return true;
      
      this.router.navigate(['Login']);
    
    return false;
  }
}
