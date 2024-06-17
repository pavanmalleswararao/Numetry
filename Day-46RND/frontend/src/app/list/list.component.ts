import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <h2>List Component</h2>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  items: string[] = [];

  ngOnInit() {
    this.items.push('Hello');
    this.items.push('World');
  }
}
