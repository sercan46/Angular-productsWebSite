import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { Prod } from "./prod.model";
import { ProdService } from "./prod.service";
@Component({
  selector: "app-prod",
  templateUrl: "./prod.component.html",
  styleUrls: ["./prod.component.css"],
})
export class ProdComponent implements OnInit {
  constructor(
    private prodService: ProdService,
    private confirmationService: ConfirmationService
  ) {}
  prods: Prod[];
  prodControl = new FormControl("");
  selectedCities: string[];
  cols: any[];
  index: number;
  displayUpdate: boolean = false;
  displayNew: boolean = false;

  prodidController = new FormControl("");
  pnameController = new FormControl("");
  pcountController = new FormControl("");
  pSalesController = new FormControl("");
  prod: any;
  async ngOnInit() {
    await this.prodData();
    this.cols = [
      { field: "ProdId", header: "Prod Number" },
      { field: "ProdName", header: "Prod Name" },
      { field: "ProdCount", header: "Prod Count" },
      { field: "ProdSales", header: "Prod Sales" },
    ];
  }
  async prodData() {
    let resp = await this.prodService.fetchProd().toPromise();
    this.prods = JSON.parse(resp);
    console.log("aaaa", this.prods);
  }
  openDetail(i) {
    console.log("aer", i);
  }
  duzenle(duzenle) {
    this.displayUpdate = true;
    this.displayNew=false;
    this.prodidController.setValue(duzenle.ProdId);
    this.pnameController.setValue(duzenle.ProdName);
    this.pcountController.setValue(duzenle.ProdCount);
    this.pSalesController.setValue(duzenle.ProdSales);
  }
  updateProd(){

    this.confirmationService.confirm({
      message: "Are you sure you want to update the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        console.log('x',this.prodidController.value)
        let x=this.prods.findIndex(x=>x.ProdId==this.prodidController.value);
        console.log('XXX',x+1)
          this.prods.forEach(y=>{
              if(y.ProdId==x+1){
                console.log('AAA',y)
                y.ProdName=this.pnameController.value
                y.ProdCount=this.pcountController.value
                y.ProdSales=this.pSalesController.value
              }
          })
      },
    });

  }
  deleteSelectedProducts(duzenle) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        console.log("bbb", this.prods);

        this.prods.forEach((x) => {
          if (x.ProdId == duzenle.ProdId) {
            const index = this.prods.indexOf(x);
            if (index > -1) {
              this.prods.splice(index, 1);
            }
          }
        });
      },
    });
  }
  addDialog() {
    this.displayNew = true;
    this.displayUpdate=false;
    this.prodidController.reset();
    this.pnameController.reset();
    this.pcountController.reset();
    this.pSalesController.reset();

  }
  addProd() {
    let prodid = this.prodidController.value;
    let pname = this.pnameController.value;
    let pcount = this.pcountController.value;
    let psales = this.pSalesController.value;
    this.prod = {
      ProdId: prodid,
      ProdName: pname,
      ProdCount: pcount,
      ProdSales: psales,
    };
    console.log("AAA", this.prods);
    this.prods.push(this.prod);
    console.log("this.prods", this.prods);
  }
}
