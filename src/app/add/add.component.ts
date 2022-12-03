import { Priority } from './../model/priority';
import { Router } from '@angular/router';
import { NoteStorageService } from './../services/note-storage.service';
import { NoteService } from './../services/note.service';
import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../model/note';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('selectpriority') prioritySelect!: ElementRef;
  @Output() newNote = new EventEmitter<string>();

  note!: Note;
  notes?: Note[];
  priorities?: Priority[];
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private router: Router, private noteService: NoteService, private noteStorageService: NoteStorageService) { }

  ngOnInit(): void {
    this.note = new Note('','',{},'');
    this.priorities = [{name:'High'},{name:'Medium'},{name:'Low'}];
    setTimeout(() => {
      M.FormSelect.init(this.prioritySelect.nativeElement);
    },100);
  }

  onSubmit() {
    this.isSubmitted = true;
    this.noteService.save(this.note).then(() => {
      this.message = 'Note inserted!';
    })
    .catch((e) => {
      this.message = e;
      alert(e);
    });
    this.noteStorageService.save(this.note);
    this.isShowMessage = true;
    this.isSuccess = true;

    this.form.reset();
    this.note = new Note('', '', {},'');

    this.router.navigate(['/list']);
  }

  comparePriority(p1: Priority, p2: Priority){
    if(p1 != null && p2 != null){
      return p1.id == p2.id;
    }
    return false;
  }
}
