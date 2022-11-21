import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from './../util/constants';
import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable()
export class NoteStorageService {
  notes: Note[] = [];
  private noteSource!: BehaviorSubject<number>;
  constructor() {
    this.notes = WebStorageUtil.get(Constants.NOTES_KEY);
    this.noteSource = new BehaviorSubject<number>(this.notes?.length);
  }

  save(note: Note) {
    this.notes = WebStorageUtil.get(Constants.NOTES_KEY);
    this.notes.push(note);
    WebStorageUtil.set(Constants.NOTES_KEY, this.notes);
  }

  update(note: Note) {
    this.notes = WebStorageUtil.get(Constants.NOTES_KEY);
    this.delete(note.id);
    this.save(note);
  }

  delete(id: string): boolean {
    this.notes = WebStorageUtil.get(Constants.NOTES_KEY);
    this.notes = this.notes.filter((n) => {
      return n.id?.valueOf() != id?.valueOf();
    });
    WebStorageUtil.set(Constants.NOTES_KEY, this.notes);
    return true;
  }

  isExist(value: string): boolean {
    this.notes = WebStorageUtil.get(Constants.NOTES_KEY);
    for (let u of this.notes) {
      if (u.title?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getNotes(): Note[] {
    this.notes = WebStorageUtil.get(Constants.NOTES_KEY);
    return this.notes;
  }

  notifyTotalNotes() {
    this.noteSource.next(this.getNotes()?.length);
    // if (this.getNotes()?.length > 1) {
    //   this.NoteSource.complete();
    // }
  }

  asObservable(): Observable<number> {
    return this.noteSource;
    //return this.NoteSource.asObservable()
  }
}
