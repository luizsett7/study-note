import { Router, ActivatedRoute } from '@angular/router';
import { NoteStorageService } from './../services/note-storage.service';
import { NoteService } from './../services/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  notes?: Note[];
  notesStorage?: Note[];
  note!: Note;
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService, private noteStorageService: NoteStorageService) {
    this.message = this.route.snapshot.paramMap.get('message')!;
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.note = new Note('', '', {}, '');
    this.getNotes();
    this.notesStorage = this.noteStorageService.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
    .subscribe(notes => this.notes = notes);
  }

  reloadNotesParent(value: string) {
    this.getNotes();
    this.notesStorage = this.noteStorageService.getNotes();
  }

  onEdit(note: Note) {
    this.router.navigate(['/edit',note.id]);
  }

  onDelete(note: Note) {
    let confirmation = window.confirm(
      'Do you want to delete this note for sure ' + note.title
    );
    if (!confirmation) {
      return;
    }
    this.noteStorageService.delete(note.id);
    let response: boolean = this.noteService.delete(note);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'The item has been removed!';
    } else {
      this.message = 'Opps! The item can\'t be removed!';
    }
    this.getNotes();
    this.notesStorage = this.noteStorageService.getNotes();
  }
}
