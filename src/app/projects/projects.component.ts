import { OnInit, Component, ViewContainerRef } from "@angular/core";

import { collageImages } from "./image.paths";

@Component({
  selector: "app-projects",
  templateUrl: "projects.component.html",
  styleUrls: ["projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  collageImages;
  ngOnInit() {
      this.collageImages = collageImages;
  }

  constructor(private vc: ViewContainerRef) {}
}
