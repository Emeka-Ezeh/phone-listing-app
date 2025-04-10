import { Component , AfterViewInit } from '@angular/core';
import *as bootstrap from 'bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit{
  ngAfterViewInit() {
   const carousel = new bootstrap.Carousel('#carouselExample')
    }
  }


