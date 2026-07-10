import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DashboardService } from 'src/app/core/services/dashboard.service';


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {


  constructor(
    private dashboardService: DashboardService
  ){}



  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {

    labels: [
      'New',
      'Contacted',
      'Qualified',
      'Lost',
      'Closed'
    ],

    datasets: [

      {
        data: [0,0,0,0,0],

        backgroundColor: [
          '#8b5cf6',
          '#3b82f6',
          '#22c55e',
          '#ef4444',
          '#f59e0b'
        ],

        borderWidth: 0
      }

    ]

  };



  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {

    responsive:true,

    maintainAspectRatio:false,


    plugins:{

      legend:{
        display:false
      }

    }


  };





  ngOnInit(): void {


    this.loadChart();


  }




  loadChart(){


    this.dashboardService.getLeadsByStatus()
    .subscribe((data:any)=>{


      this.doughnutChartData.datasets[0].data = [

        data.NEW || 0,

        data.CONTACTED || 0,

        data.QUALIFIED || 0,

        data.LOST || 0,

        data.CLOSED || 0

      ];


    });



  }



}