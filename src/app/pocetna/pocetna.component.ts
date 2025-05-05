import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pocetna',
  imports: [CommonModule, MatIconModule],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css'
})
export class PocetnaComponent {
  slideIndex = 0;
  slides = [
    { image: 'assets/foto/1.jpg', text: 'Mjesto gdje tvoj san postaje stvarnost' },
    { image: 'assets/foto/2.jpg', text: 'Mjesto gdje tvoj san postaje stvarnost' },
    { image: 'assets/foto/3.jpg', text: 'Mjesto gdje tvoj san postaje stvarnost' },
  ];

  isLoading = true;

  ngOnInit() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  constructor() {
    this.startAutoSlide();
  }

  plusSlides(n: number) {
    this.slideIndex = (this.slideIndex + n + this.slides.length) % this.slides.length;
  }

  currentSlide(n: number) {
    this.slideIndex = n;
  }

  startAutoSlide() {
    setInterval(() => this.plusSlides(1), 8000);
  }
}
