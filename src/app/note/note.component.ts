import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  title!: String;
  priority!: String;
  isHidePanel = true;

  constructor() {
    this.priority = "Medium";
  }

  ngOnInit(): void {
  }

  onSelectChange(event: Event){
    this.priority = (event.target as HTMLInputElement).value;
  }

  onInsertClick(){
    alert("Note inserted");
  }

  onShowClick(){
    this.isHidePanel = false;
  }

  onHideClick(){
    this.isHidePanel = true;
  }

}
