import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})

export class ProdService{

  constructor(public http: HttpClient) {}

  fetchProd(): Observable<any> {
      return this.http
          .get("http://localhost:3000/Products", {
              responseType: "text",
          })
          .pipe(
              map((response) => {
                  return response;
              })
          );
  }
}
