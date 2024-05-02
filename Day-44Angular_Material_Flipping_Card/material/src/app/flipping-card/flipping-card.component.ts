import { Component } from '@angular/core';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.css']
})
export class FlippingCardComponent {
  flipped: boolean = false;

  flip() {
    this.flipped = !this.flipped;
  }
}
