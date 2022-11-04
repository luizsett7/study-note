import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() newNote = new EventEmitter<string>();

  addNewNote(note: string): void{
    this.newNote.emit(note);
    alert("Nota "+note+" adicionada");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
