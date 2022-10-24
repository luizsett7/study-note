import * as $ from 'jquery';
import * as M from 'materialize-css';

import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  title = 'StudyNote';

  ngAfterViewInit():void{
    let $sideNav = $('#mobile-demo');
    //M.Sidenav.init(this.sideNav?.nativeElement);
    M.Sidenav.init($sideNav);
  }
}
