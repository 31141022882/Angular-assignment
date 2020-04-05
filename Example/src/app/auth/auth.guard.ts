import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(`callback url: ${state.url}`);
    return this.checkLogin(state.url);
  }

  checkLogin(callbackUrl): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.callBackUrl = callbackUrl;
    this.router.navigate(['/']);
  }
}
