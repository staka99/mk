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
  images: string[] = [];
  currentImageIndex: number | null = null;

  constructor() {
    for (let i = 1; i <= 120; i++) {
      this.images.push(`assets/galerija/${i}.webp`);
    }
  }

  openImage(index: number) {
    this.currentImageIndex = index;
  }

  onImageLoad(event: Event) {
    (event.target as HTMLImageElement).classList.add('loaded');
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
