import { NoteService } from './../services/note.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  note!: Note;

  constructor(private route: ActivatedRoute, private noteService: NoteService) {

   }

  ngOnInit(): void {
    this.note = new Note('','',{},'');
    const noteId: number = +this.route.snapshot.paramMap.get('id')!;
    this.getNoteById(noteId);
  }

  getNoteById(noteId: number): void {
    this.noteService.getNoteById(noteId)
    .subscribe(note => this.note = note);
  }

}
