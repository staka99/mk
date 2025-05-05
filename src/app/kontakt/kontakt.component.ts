import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-kontakt',
  imports: [MatIconModule, CommonModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.css'
})
export class KontaktComponent {

  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    },2000); // 
  }

}
