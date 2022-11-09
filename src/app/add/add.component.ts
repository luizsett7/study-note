import { Router } from '@angular/router';
import { NoteStorageService } from './../services/note-storage.service';
import { NoteService } from './../services/note.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../model/note';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @Output() newNote = new EventEmitter<string>();

  note!: Note;
  notes?: Note[];
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private router: Router, private noteService: NoteService, private noteStorageService: NoteStorageService) { }

  ngOnInit(): void {
    this.note = new Note('','','','');
  }

  onSubmit() {
    this.isSubmitted = true;
    //if (!this.noteService.isExist(this.note.title)) {
      this.noteService.save(this.note);
      this.noteStorageService.save(this.note);
    //} else {
      //this.noteService.update(this.note);
    //}
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Note inserted!';

    this.form.reset();
    this.note = new Note('', '', '','');

    this.router.navigate(['/list']);

    //this.notes = this.noteService.getNotes();

    //this.noteService.notifyTotalNotes();
  }

}
