import { LoginService } from './../services/login.service';
import * as M from 'materialize-css';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  logout(){
    this.loginService.logout();
  }

}
