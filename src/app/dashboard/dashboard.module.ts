import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashbordRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    HttpClientModule,
    ChartModule,
    ButtonModule

  ]


})
export class DashboardModule { }
