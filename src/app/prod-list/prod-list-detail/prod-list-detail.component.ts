import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdDetail } from './prod-list-detail';
import { ProdDetailListService } from './prod-list-detail.service';

@Component({
  selector: 'app-prod-list-detail',
  templateUrl: './prod-list-detail.component.html',
  styleUrls: ['./prod-list-detail.component.css']
})
export class ProdListDetailComponent implements OnInit {
  id:any;
  prods:ProdDetail[]=[];
  prod:ProdDetail[];
  constructor(private route: ActivatedRoute,private prodDetailService:ProdDetailListService) {
    const paramsId: string = this.route.snapshot.params.id;
    this.id=paramsId;
   }
 async ngOnInit() {
    await this.prodData();
  }
  async prodData(){
    let resp=await this.prodDetailService.fetchProd().toPromise();
    this.prods=JSON.parse(resp);
    console.log('prods',this.prods)
    this.prod=this.prods.filter(x=>x.ProdId==this.id);
    console.log('AAA',this.prod)
  }

}
