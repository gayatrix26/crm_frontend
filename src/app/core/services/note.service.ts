import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from '../../models/interfaces/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly apiUrl = 'http://localhost:8080/api/notes';

  constructor(private http: HttpClient) { }

  // ==========================
  // Create Note
  // ==========================

  createNoteObject(
    note: Note
  ): Observable<Note> {

    return this.http.post<Note>(
      this.apiUrl,
      note
    );
  }

  // ==========================
  // Update Note
  // ==========================

  updateNoteObject(
    noteId: number,
    note: Note
  ): Observable<Note> {

    return this.http.put<Note>(
      `${this.apiUrl}/${noteId}`,
      note
    );
  }

  // ==========================
  // Delete Note
  // ==========================

  deleteNote(
    noteId: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${noteId}`
    );
  }

  // ==========================
  // Get Note By Id
  // ==========================

  getNoteByIdObject(
    noteId: number
  ): Observable<Note> {

    return this.http.get<Note>(
      `${this.apiUrl}/${noteId}`
    );
  }

  // ==========================
  // Get Notes By Lead
  // ==========================

  getNotesByLeadList(
    leadId: number
  ): Observable<Note[]> {

    return this.http.get<Note[]>(
      `${this.apiUrl}/lead/${leadId}`
    );
  }

}