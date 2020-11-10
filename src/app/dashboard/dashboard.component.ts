import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdClass } from './dashboard.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashbordService:DashboardService,private router:Router) {
}

  prodInfo:ProdClass[]=[];
  dataPie: any;
  dataBar:any;
  async ngOnInit() {
    await this.prodData();
  }
 async prodData(){
   let val= await this.dashbordService.fetchProd().toPromise();
    this.prodInfo=JSON.parse(val);
    console.log('prodInfo',this.prodInfo)
    this.fetchPieChart();
    this.fetchBarChart()
  }
  fetchPieChart(){
    this.dataPie = {
      labels: this.prodInfo.map(x=>x.ProdName),

      datasets: [
          {
              data: this.prodInfo.map(x=>x.ProdCount),
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#8deeee",
                  "#f4a460",
                  "#8470ff"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#8deeee",
                  "#f4a460",
                  "#8470ff"

              ]
          }]
      };
  }
  fetchBarChart(){
    this.dataBar = {
      labels: this.prodInfo.map(x=>x.ProdName),
      datasets: [
          {

              data:  this.prodInfo.map(x=>x.ProdSales),
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#8deeee",
                  "#f4a460",
                  "#8470ff"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#8deeee",
                  "#f4a460",
                  "#8470ff"

              ]
          }]
      };
  }
  prodList(){
    this.router.navigateByUrl("/products")
  }
  prodGridList(){
    this.router.navigateByUrl("/products-list")

  }
}
