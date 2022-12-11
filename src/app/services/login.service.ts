import { Constants } from './../util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginSource = new Subject<boolean>();

  constructor(private router: Router) {}

  login() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
    this.loginSource.next(true);
    this.router.navigate(['']);
  }

  logout() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
    this.loginSource.next(false);
    this.router.navigate(['']);
  }

  asObservable(): Observable<boolean> {
    return this.loginSource;
  }
}
