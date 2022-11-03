import { Component, OnInit } from '@angular/core';
import { notes } from './../notes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  notes = notes;
  constructor() { }

  ngOnInit(): void {
  }

}
