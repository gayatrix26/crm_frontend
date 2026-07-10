import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FollowUp } from '../../models/interfaces/follow-up.model';

@Injectable({
  providedIn: 'root'
})
export class FollowUpService {

  private readonly apiUrl = 'http://localhost:8080/api/follow-ups';

  constructor(private http: HttpClient) { }

  // ==========================
  // Schedule Follow Up
  // ==========================

  scheduleFollowUpObject(
    followUp: FollowUp
  ): Observable<FollowUp> {

    return this.http.post<FollowUp>(
      this.apiUrl,
      followUp
    );
  }

  // ==========================
  // Update Follow Up
  // ==========================

  updateFollowUpObject(
    followUpId: number,
    followUp: FollowUp
  ): Observable<FollowUp> {

    return this.http.put<FollowUp>(
      `${this.apiUrl}/${followUpId}`,
      followUp
    );
  }

  // ==========================
  // Delete Follow Up
  // ==========================

  deleteFollowUp(
    followUpId: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${followUpId}`
    );
  }

  // ==========================
  // Get Follow Up By Id
  // ==========================

  getFollowUpByIdObject(
    followUpId: number
  ): Observable<FollowUp> {

    return this.http.get<FollowUp>(
      `${this.apiUrl}/${followUpId}`
    );
  }

  // ==========================
  // Get Follow Ups By Lead
  // ==========================

  getFollowUpsByLeadList(
    leadId: number
  ): Observable<FollowUp[]> {

    return this.http.get<FollowUp[]>(
      `${this.apiUrl}/lead/${leadId}`
    );
  }

  // ==========================
  // Today's Follow Ups
  // ==========================

  getTodaysFollowUpsList(): Observable<FollowUp[]> {

    return this.http.get<FollowUp[]>(
      `${this.apiUrl}/today`
    );
  }

  // ==========================
  // Pending Follow Ups
  // ==========================

  getPendingFollowUpsList(): Observable<FollowUp[]> {

    return this.http.get<FollowUp[]>(
      `${this.apiUrl}/pending`
    );
  }

  // ==========================
  // Completed Follow Ups
  // ==========================

  getCompletedFollowUpsList(): Observable<FollowUp[]> {

    return this.http.get<FollowUp[]>(
      `${this.apiUrl}/completed`
    );
  }

  // ==========================
  // Upcoming Follow Ups
  // ==========================

  getUpcomingFollowUpsList(): Observable<FollowUp[]> {

    return this.http.get<FollowUp[]>(
      `${this.apiUrl}/upcoming`
    );
  }

}