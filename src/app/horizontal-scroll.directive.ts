import {
  Directive,
  OnInit,
  ViewContainerRef,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appHorizontalScroll]",
})
export class HorizontalScrollDirective implements OnInit {
  @HostListener("mousewheel", ["$event"]) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener("DOMMouseScroll", ["$event"]) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener("onmousewheel", ["$event"]) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }

  constructor(private vc: ViewContainerRef) {}

  mouseWheelFunc(event: any) {
    var event = window.event || event; // old IE support
    var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
    if (delta > 0) {
      // this.mouseWheelUp.emit(event);
      //   console.log(event);
    } else if (delta < 0) {
      // this.mouseWheelDown.emit(event);
      //   console.log(event);
    }

    let scr = event.wheelDelta;

    // smooth scroll
    while(scr != 0) {

        if (delta > 0) {
            // this.mouseWheelUp.emit(event);
            //   console.log(event);
            this.vc.element.nativeElement.scrollLeft -= 1;
            scr--;
          } else if (delta < 0) {
            // this.mouseWheelDown.emit(event);
            //   console.log(event);
            this.vc.element.nativeElement.scrollLeft += 1;
            scr++;
          }
        
        
    }

    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  ngOnInit() {
    console.log(this.vc);
    this.vc.element.nativeElement.style.display = "flex";
    this.vc.element.nativeElement.style["flex-direction"] = "row";
  }
}
