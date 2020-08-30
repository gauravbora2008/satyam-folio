import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ComponentFactory,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

// directive => component => parent component

import { HorizontalScrollComponent } from "./horizontal-scroll/horizontal-scroll.component";

@Directive({
  selector: "[appFullpageHorizontalScroll]",
})
export class FullpageHorizontalScrollDirective implements OnInit {
  scrollPos: number = 0;
  // container : HorizontalScrollComponent;

  @HostListener("scroll") onScrollHost(): void {
    // console.log(this.vc.element.nativeElement.scrollTop);

    this.hzScrollComponent.location.nativeElement.style.left = "-" + this.vc.element.nativeElement.scrollTop + "px";

  }

  constructor(
    private el: ElementRef,
    public vc: ViewContainerRef,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver
  ) {}

  // @ViewChild("horizontalScrollRef", {static: true}) horizontalScrollRef : ElementRef;

  hzScrollComponent: ComponentRef<HorizontalScrollComponent>
  

  ngOnInit() {
    
    this.renderer.addClass(this.el.nativeElement, "fullpage-horizontal-scroll");

    const factory: ComponentFactory<HorizontalScrollComponent> = this.resolver.resolveComponentFactory(HorizontalScrollComponent);
    
    this.hzScrollComponent = this.vc.createComponent(factory);
    
  }

  ngAfterViewInit() {

    console.log(this.vc.element.nativeElement.scrollHeight);

    console.log(this.hzScrollComponent.location.nativeElement.style);

    this.hzScrollComponent.location.nativeElement.style.width = this.vc.element.nativeElement.scrollHeight + "px";


    this.hzScrollComponent.location.nativeElement = this.vc.element.nativeElement;

  }
}
