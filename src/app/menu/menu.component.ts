import { OnInit, Component } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
  styleUrls: ["menu.component.scss"],
})
export class MenuComponent implements OnInit {
  showProjects: boolean = false;
  ngOnInit() {}  
  
}
