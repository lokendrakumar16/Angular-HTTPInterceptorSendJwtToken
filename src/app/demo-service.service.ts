import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DemoServiceService {
  constructor(private _http: HttpClient) {}

  getEmployees() {
    return this._http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
