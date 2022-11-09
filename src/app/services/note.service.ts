import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Note } from '../model/note';
import { RoutesAPI } from './../util/routes-api';
import { ErrorUtil } from './../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getNotes(): Promise<Note[]>  {
    return this.httpClient
      .get<Note>(
        `${RoutesAPI.NOTES}`,
        this.httpOptions
      )
      .toPromise().then();
  }

  getNoteById(id: number): Promise<Note>  {
    return this.httpClient
      .get<Note>(
        `${RoutesAPI.NOTES}/${id}`,
        this.httpOptions
      )
      .toPromise().then();
  }

  save(note: Note): Promise<Note> {
    return this.httpClient
      .post<Note>(
        `${RoutesAPI.NOTES}`,
        JSON.stringify(note),
        this.httpOptions
      )
      .toPromise().then();
  }

  update(note: Note): Promise<Note> {
    return this.httpClient
      .put<Note>(
        `${RoutesAPI.NOTES}/${note.id}`,
        JSON.stringify(note),
        this.httpOptions
      )
      .toPromise().then();
  }

  delete(note: Note): boolean {
    this.httpClient
    .delete<Note>(
      `${RoutesAPI.NOTES}/${note.id}`
    ).toPromise();
    return true;
  }
}
