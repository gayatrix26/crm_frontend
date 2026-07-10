import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';


@Component({
  selector: 'app-recent-leads',
  templateUrl: './recent-leads.component.html',
  styleUrls: ['./recent-leads.component.css']
})
export class RecentLeadsComponent implements OnInit {


  recentLeads:any[] = [];


  constructor(
    private dashboardService: DashboardService
  ){}



  ngOnInit(): void {

    this.loadRecentLeads();

  }



  loadRecentLeads(){

    this.dashboardService.getRecentLeads()
    .subscribe({

      next:(data)=>{

        this.recentLeads = data;

      },

      error:(err)=>{

        console.error(
          "Failed to load recent leads",
          err
        );

      }

    });

  }



}