import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  id: Number;
  title!: String;
  description!: String;
  priority!: String;
  isHidePanel = true;
  isHideDetail = true;
  category: String[];

  constructor() {
    this.id = 1;
    this.title = "Title Ipsum";
    this.priority = "Medium";
    this.description = "Lorem Ipsum";
    this.category = ['Programming','Data Structure'];
  }

  addNote(category: string): void{
    this.category.push(category);
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

  onShowDetail(){
    this.isHideDetail = false;
  }

  onHideClick(){
    this.isHidePanel = true;
  }

}
