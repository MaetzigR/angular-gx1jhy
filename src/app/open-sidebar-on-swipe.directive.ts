import { Directive, HostBinding, Output, EventEmitter, ChangeDetectorRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Directive({
  selector: '[appOpenSidebarOnSwipe]'
})

export class OpenSidebarOnSwipeDirective {
  sidebar: MatSidenav;
@HostBinding('style.width') width;
@Input('sideNav') set sideNav(sideNav: MatSidenav){
  this.sidebar = sideNav;
}

@Output() setWidth: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
    console.log('directive');
    
  }
  ngAfterViewInit(){
    this.setWidth.emit(80);
    this.startOnTouch();
  }
  startOnTouch(){
    fromEvent(document, 'touchstart').pipe(
      tap((e: TouchEvent) => e.touches[0].clientX <=20 && e.touches[0].clientY >= 65 ? (this.sidebar.open(),
            this.setWidth.emit (e.touches[0].clientX)) : '' )
    ).subscribe();
  }
}