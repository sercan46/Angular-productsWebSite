import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { ProdDetail } from "./prod-list.model";
import { ProdListService } from "./prod-list.service";

@Component({
  selector: "app-prod-list",
  templateUrl: "./prod-list.component.html",
  styleUrls: ["./prod-list.component.css"],
})
export class ProdListComponent implements OnInit {
  constructor(
    private prodListService: ProdListService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}
  prods: ProdDetail[] = [];
  basketProd: ProdDetail[] = [];
  async ngOnInit() {
    await this.prodData();
    //console.log('thas',this.prods)
  }
  async prodData() {
    let resp = await this.prodListService.fetchProd().toPromise();
    this.prods = JSON.parse(resp);
  }
  openDetail(prod) {
    let id = prod.ProdId;
    //console.log('id',id)
    this.router.navigateByUrl(`/products-list/selected-product/info/${id}`);
  }
  basketAdd(prod) {
    // console.log('prod',prod)

    this.confirmationService.confirm({
      message: "Are you sure you want to add the product to the basket?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.basketProd.push(prod);
      },
    });
    //console.log('AAA',this.basketProd)
  }
}
