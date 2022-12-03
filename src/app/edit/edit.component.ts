import { Priority } from './../model/priority';
import { NoteStorageService } from './../services/note-storage.service';
import { NoteService } from './../services/note.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../model/note';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('selectpriority') selectPriority!: ElementRef;

  note!: Note;
  notes?: Note[];
  priorities?: Priority[];
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService, private noteStorageService: NoteStorageService) {
    this.priorities = [{name:'High'},{name:'Medium'},{name:'Low'}];
  }

  ngOnInit(): void {
    this.note = new Note('','',{},'');
    const noteId: number = +this.route.snapshot.paramMap.get('id')!;
    this.getNoteById(noteId);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      M.FormSelect.init(this.selectPriority.nativeElement);
    },100);
  }

  getNoteById(noteId: number): void {
    this.noteService.getNoteById(noteId)
    .subscribe(note => this.note = note);
  }

  onSubmit() {
    this.isSubmitted = true;
    this.noteService.update(this.note);
    this.noteStorageService.update(this.note);
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Note updated!';
    this.router.navigate(['/list']);
  }

  comparePriority(p1: Priority, p2: Priority){
    if(p1 != null && p2 != null){
      return p1.name == p2.name;
    }
    return false;
  }

}
