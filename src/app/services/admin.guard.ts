import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  
  const router: Router = inject(Router);
  const service: LoginService= inject(LoginService);
  if(service.isLoggedIn()&& service.getUserRole()=='ADMIN'){
    return true;
  }
  router.navigate(['login'])
  return false;
};