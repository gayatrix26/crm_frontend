import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lead } from '../../models/interfaces/lead.model';
import { PageResponse } from '../../models/interfaces/page-response.model';

import { LeadPriority } from '../../models/enums/lead-priority.enum';
import { LeadSource } from '../../models/enums/lead-source.enum';
import { LeadStatus } from '../../models/enums/lead-status.enum';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private readonly apiUrl = 'http://localhost:8080/api/leads';

  constructor(private http: HttpClient) { }

  // ==========================
  // Create Lead
  // ==========================

  createLeadObject(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.apiUrl, lead);
  }

  // ==========================
  // Update Lead
  // ==========================

  updateLeadObject(leadId: number, lead: Lead): Observable<Lead> {
    return this.http.put<Lead>(`${this.apiUrl}/${leadId}`, lead);
  }

  // ==========================
  // Delete Lead
  // ==========================

  deleteLead(leadId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${leadId}`);
  }

  // ==========================
  // Get Lead By Id
  // ==========================

  getLeadByIdObject(leadId: number): Observable<Lead> {
    return this.http.get<Lead>(`${this.apiUrl}/${leadId}`);
  }

  // ==========================
  // Get All Leads
  // ==========================

 getAllLeadsPage(page = 0, size = 10): Observable<PageResponse<Lead>> {

  const params = new HttpParams()
    .set('page', page)
    .set('size', size)
    .set('sort', 'leadId,desc');

  return this.http.get<PageResponse<Lead>>(
    this.apiUrl,
    { params }
  );
}

  // ==========================
  // Search Leads
  // ==========================

  searchLeadsPage(
    keyword: string,
    page = 0,
    size = 10
  ): Observable<PageResponse<Lead>> {

    const params = new HttpParams()
      .set('keyword', keyword)
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Lead>>(
      `${this.apiUrl}/search`,
      { params }
    );
  }

  // ==========================
  // Filter By Status
  // ==========================

  getLeadsByStatusPage(
    status: LeadStatus,
    page = 0,
    size = 10
  ): Observable<PageResponse<Lead>> {

    const params = new HttpParams()
      .set('status', status)
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Lead>>(
      `${this.apiUrl}/filter/status`,
      { params }
    );
  }

  // ==========================
  // Filter By Priority
  // ==========================

  getLeadsByPriorityPage(
    priority: LeadPriority,
    page = 0,
    size = 10
  ): Observable<PageResponse<Lead>> {

    const params = new HttpParams()
      .set('priority', priority)
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Lead>>(
      `${this.apiUrl}/filter/priority`,
      { params }
    );
  }

  // ==========================
  // Filter By Category
  // ==========================

  getLeadsByCategoryPage(
    categoryId: number,
    page = 0,
    size = 10
  ): Observable<PageResponse<Lead>> {

    const params = new HttpParams()
      .set('categoryId', categoryId)
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Lead>>(
      `${this.apiUrl}/filter/category`,
      { params }
    );
  }

  // ==========================
  // Filter By Assigned User
  // ==========================

  getLeadsByAssignedUserPage(
    userId: number,
    page = 0,
    size = 10
  ): Observable<PageResponse<Lead>> {

    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Lead>>(
      `${this.apiUrl}/filter/user/${userId}`,
      { params }
    );
  }

  // ==========================
  // Filter By Source
  // ==========================

  getLeadsBySourcePage(
    source: LeadSource,
    page = 0,
    size = 10
  ): Observable<PageResponse<Lead>> {

    const params = new HttpParams()
      .set('source', source)
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Lead>>(
      `${this.apiUrl}/filter/source`,
      { params }
    );
  }

  // ==========================
  // Filter By City
  // ==========================

  getLeadsByCityPage(
    city: string,
    page = 0,
    size = 10
  ): Observable<PageResponse<Lead>> {

    const params = new HttpParams()
      .set('city', city)
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<Lead>>(
      `${this.apiUrl}/filter/city`,
      { params }
    );
  }

  // ==========================
  // Assign Lead
  // ==========================

  assignLeadObject(
    leadId: number,
    userId: number
  ): Observable<Lead> {

    return this.http.patch<Lead>(
      `${this.apiUrl}/${leadId}/assign/${userId}`,
      {}
    );
  }

  // ==========================
  // Change Lead Status
  // ==========================

  changeLeadStatusObject(
    leadId: number,
    status: LeadStatus
  ): Observable<Lead> {

    const params = new HttpParams().set('status', status);

    return this.http.patch<Lead>(
      `${this.apiUrl}/${leadId}/status`,
      {},
      { params }
    );
  }

}