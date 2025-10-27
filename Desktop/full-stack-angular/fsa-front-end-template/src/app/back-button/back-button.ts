import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css',
})
export class BackButton {
  private location = inject(Location);
  goBack(): void {
    this.location.back();
  }
}
