import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';
import { MatIconModule } from '@angular/material/icon';

interface Image {
  src: string;
  thumb: string;
  caption: string;
}

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [CommonModule, LightboxModule, MatIconModule],
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css']
})
export class GalerijaComponent {
  isLoading = true;
  imagesLoaded = 0;
  images: string[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 👈 Loader traje 3 sekunde
  }

  currentImageIndex: number | null = null;

  constructor() {
    for (let i = 1; i <= 120; i++) {
      this.images.push(`assets/galerija/${i}.webp`);
    }
  }

  openImage(index: number) {
    this.currentImageIndex = index;
  }

  closeImage() {
    this.currentImageIndex = null;
  }

  nextImage() {
    if (this.currentImageIndex !== null && this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage() {
    if (this.currentImageIndex !== null && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

}
