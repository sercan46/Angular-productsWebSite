import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})

export class LoginService{

  constructor(public http: HttpClient) {}

  fetchLogin(): Observable<any> {
      return this.http
          .get("http://localhost:3000/Contents", {
              responseType: "text",
          })
          .pipe(
              map((response) => {
                  return response;
              })
          );
  }
}
