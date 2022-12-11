import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { User } from './../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    let user: User = WebStorageUtil.get(Constants.USERNAME_KEY) as User;

    if (!WebStorageUtil.get(Constants.LOGGED_IN_KEY)) {
      this.router.navigateByUrl('/not-authorized');
      return false;
    }

    if (!user.isAdmin) {
      this.router.navigateByUrl('/not-authorized');
      return false;
    }

    return true;
  }
}
