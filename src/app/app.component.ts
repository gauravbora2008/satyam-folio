import { Component, AfterViewInit, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit, OnInit {
  home = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        ev.url === "/" ? (this.home = true) : (this.home = false);
      }
    });
  }
  ngAfterViewInit() {
    // console.log(this.vc.element.nativeElement);
  }
}
