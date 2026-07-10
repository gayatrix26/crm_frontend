import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  private baseUrl = 'http://localhost:8080/api/dashboard';


  constructor(
    private http: HttpClient
  ) { }



  // Statistics Cards

  getStatistics(): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/statistics`
    );

  }



  // Bar Chart

  getLeadsByStatus(): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/leads/status`
    );

  }



  // Donut Chart

  getLeadsByPriority(): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/leads/priority`
    );

  }



  // Recent Leads

  getRecentLeads(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/recent-leads`
    );

  }

}