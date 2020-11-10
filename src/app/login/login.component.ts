import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { timer } from 'rxjs';
import { UserInfo } from "./login.model";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  loginInfo: any;
  subString:any;
 async ngOnInit() {
    this.loginData();
  }
  async loginData() {
   let resp=await this.loginService.fetchLogin().toPromise();
      this.loginInfo = JSON.parse(resp);
      console.log("loginInfo", this.loginInfo);
    this.loginInfo.forEach(x=>{
      let category=x.Category;
      console.log('AAA',category)
      this.subString= category.toString().split('\\');
      console.log('catee',this.subString)
      this.subString.shift();
      console.log('X',this.subString)
    })
  }
}
