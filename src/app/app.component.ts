import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SidebarSwipeService } from './sidebar-swipe.service';
import { SetGetWidthSidebarPipe } from './set-get-width-sidebar.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers : [SetGetWidthSidebarPipe]
})
export class AppComponent  {
    width: number;
  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit(){
  }
  
  setWidth(widthNumber: number){
    this.width = widthNumber;
    this.cdr.detectChanges();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/