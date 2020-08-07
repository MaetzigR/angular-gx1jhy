import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperComponent } from 'ngx-useful-swiper';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-swipe-demo',
  templateUrl: './swipe-demo.component.html',
  styleUrls: ['./swipe-demo.component.css']
})


export class SwipeDemoComponent {

  @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;

  title = 'ng-swiper-demo';

  slideData = [
    {
      id: 382,
      name: "Metal bluetooth cyan",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 822,
      name: "Avon",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 159,
      name: "Infrastructures",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 424,
      name: "Users Cotton",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 572,
      name: "Haptic Oklahoma Jewelery",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 127,
      name: "Circles Integration Street",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 1009,
      name: "uniform Communications Tuna",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 619,
      name: "North Carolina",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 716,
      name: "Eyeballs Rubber",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }, {
      id: 382,
      name: "Nevada green unleash",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/8773Pililla_Rizal_Barangays_Proper_27.jpg/320px-8773Pililla_Rizal_Barangays_Proper_27.jpg"
    }
  ]

  config: SwiperOptions = {

    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    initialSlide: 1,
    centeredSlides: false,
   /* breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    }, */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    on: {
      slideChange: () => {
        //console.log('slideChange Event: Active Slide Index = ', this.usefulSwiper.swiper.activeIndex);

      },
      slideChangeTransitionEnd: () => {
        console.log('slideChange Event');
      }
    }
  };

 


  //Methods

  nextSlide() {
    this.usefulSwiper.swiper.slideNext();
  }

  previousSlide() {
    this.usefulSwiper.swiper.slidePrev();
  }
  
  slideToThis(index) {
    this.usefulSwiper.swiper.slideTo(index);
  }
}
