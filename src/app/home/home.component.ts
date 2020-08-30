import { Component, OnInit } from "@angular/core";
import { fromEvent, Observable, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  ngOnInit(){}
}
