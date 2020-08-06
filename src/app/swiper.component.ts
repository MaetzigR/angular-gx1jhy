
import {Component, OnInit,ElementRef, AfterViewInit} from '@angular/core';

// Don't forget to declare Global variable related to Swiper.
declare var Swiper: any;

@Component({
  selector: 'swiper',
  template: `
<div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
</div>
`
})
export class SwiperComponent implements AfterViewInit {
  	constructor(private elementRef: ElementRef) {}
    
	//[...]
	
	ngAfterViewInit() {
		/**
		 * - Here you are 100% sure, html is present on DOM, Swiper is initialize and is able to find your DOM element.
		 * - Swiper constructor accept DOMElement as parameter, i recommand this approch to optimize DOM parsing.
		 * - Because you store Swiper instance as attribute, you will be able to control Swiper by javascript. 
		**/
		this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
			//Here you can provide Swiper config
		});
	}
}