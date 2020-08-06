
import {Component, OnInit,ElementRef, AfterViewInit} from '@angular/core';
import { Swiper } from 'swiper';

// Don't forget to declare Global variable related to Swiper.


@Component({
  selector: 'swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'] 
})
export class SwiperComponent implements AfterViewInit {
  	constructor(private elementRef: ElementRef) {}
   swiper; 
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