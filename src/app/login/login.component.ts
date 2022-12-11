import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Constants } from '../util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;
  constructor(private loginService: LoginService ) { }

  ngOnInit(): void {
    this.loginUser = new User('','');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onLogin(){
    if(
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password
    ){
      this.loginService.login();
    }else{
      alert('Please, verify your username and password then try again');
    }
  }

}
