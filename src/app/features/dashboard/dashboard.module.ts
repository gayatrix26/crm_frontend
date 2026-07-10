import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RecentLeadsComponent } from './recent-leads/recent-leads.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({

  declarations: [

    DashboardComponent,
    WelcomeBannerComponent,
    StatisticsComponent,
    DonutChartComponent,
    BarChartComponent,
    RecentLeadsComponent

  ],

  imports: [

    CommonModule,
    DashboardRoutingModule,
    NgChartsModule

  ]

})
export class DashboardModule { }