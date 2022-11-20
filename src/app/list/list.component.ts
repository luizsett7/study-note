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
    this.note = new Note('', '', '', '');
    const getNotes = async () => {
      this.notes = await this.noteService.getNotes();
    };
    getNotes();
    this.notesStorage = this.noteStorageService.getNotes();
  }

  reloadNotesParent(value: string) {
    const getNotes = async () => {
      this.notes = await this.noteService.getNotes();
    };
    getNotes();
    this.notesStorage = this.noteStorageService.getNotes();
  }

  onEdit(note: Note) {
    this.router.navigate(['/edit',note.id]);
  }

  onDelete(note: Note) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + note.title
    );
    if (!confirmation) {
      return;
    }
    this.noteStorageService.delete(note.id);
    let response: boolean = this.noteService.delete(note);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    const getNotes = async () => {
      this.notes = await this.noteService.getNotes();
    };
    getNotes();
    this.notesStorage = this.noteStorageService.getNotes();
  }
}
