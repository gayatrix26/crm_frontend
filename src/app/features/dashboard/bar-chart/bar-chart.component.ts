import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DashboardService } from 'src/app/core/services/dashboard.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {


  chart!: Chart;


  constructor(
    private dashboardService: DashboardService
  ) { }



  ngOnInit(): void {

    this.loadLeadStatusChart();

  }



  loadLeadStatusChart(): void {


    this.dashboardService.getLeadsByStatus()
      .subscribe({

        next: (data) => {


          const labels = Object.keys(data);

          const values = Object.values(data);



          this.createChart(labels, values);


        },


        error: (error) => {

          console.error(
            "Error loading lead status data",
            error
          );

        }

      });


  }




  createChart(labels: string[], values: any[]): void {


    this.chart = new Chart(
      'leadStatusChart',
      {

        type: 'bar',


        data: {

          labels: labels,


          datasets: [

            {

              label: 'Leads',

              data: values,

              borderWidth: 1,

              borderRadius: 8

            }

          ]

        },


        options: {

          responsive: true,

          maintainAspectRatio: false,


          plugins: {

            legend: {

              display: false

            }

          },


          scales: {

            y: {

              beginAtZero: true,

              ticks: {

                precision: 0

              }

            }

          }


        }


      }

    );


  }


}