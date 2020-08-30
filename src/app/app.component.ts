import { Component, OnInit } from "@angular/core";
import { DemoServiceService } from "../app/demo-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private _service: DemoServiceService) {}
  title = "demo-ui";
  employeeeList: any;
  ngOnInit() {
    this._service.getEmployees().subscribe((res) => {
      this.employeeeList = res;
    });
  }
}
