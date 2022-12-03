import { Router } from '@angular/router';
import { NoteStorageService } from './../services/note-storage.service';
import { NoteService } from './../services/note.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../model/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;
  @Output() reloadNotes = new EventEmitter<string>();
  notesStorage?: Note[];
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private noteService: NoteService, private noteStorageService: NoteStorageService) {

  }

  ngOnInit(): void {

  }

  onEdit(note: Note) {
    let clone = Note.clone(note);
    this.note = clone;
  }

  onDelete(note: Note) {
    let confirmation = window.confirm(
      'Do you want to delete the note ' + note.title + ' for sure?'
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.noteService.delete(note);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'The item has been deleted with success!';
    } else {
      this.message = 'The item can\'t be removed!';
    }
    this.reloadNotes.emit('reload');
  }
}
