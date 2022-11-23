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

  /*getNotes(): Promise<Note[]>  {
    return this.httpClient
      .get<Note>(
        `${RoutesAPI.NOTES}`,
        this.httpOptions
      )
      .toPromise().then();
  }*/

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${RoutesAPI.NOTES}`)
    .pipe(catchError(ErrorUtil.handleError));
  }

  getNoteById(id: number): Observable<Note> {
    return this.httpClient.get<Note>(`${RoutesAPI.NOTES}/${id}`)
    .pipe(catchError(ErrorUtil.handleError));
  }

  save(note: Note): Promise<Note> {
    const p = new Promise<Note>((resolve, reject) => {
      if(note.title.length < 2){
        reject('Insert a title with two letters at least');
      }else{
        resolve(
          this.httpClient
          .post<Note>(
            `${RoutesAPI.NOTES}`,
            JSON.stringify(note),
            this.httpOptions
          ).toPromise().then()
        );
      }
    })
    return p;
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
