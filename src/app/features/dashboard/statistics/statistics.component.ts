import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {


  statistics:any = {

    totalLeads:0,

    newLeads:0,

    todayFollowUps:0,

    categories:0

  };



  constructor(
    private dashboardService: DashboardService
  ){}




  ngOnInit(): void {

    this.loadStatistics();

  }




  loadStatistics(){


    this.dashboardService.getStatistics()
    .subscribe({

      next:(data)=>{

        this.statistics = data;

      },


      error:(err)=>{

        console.error(
          "Failed to load statistics",
          err
        );

      }


    });


  }


}