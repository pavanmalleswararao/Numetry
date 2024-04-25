// frontend/src/app/item/item.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  selectedItem: any = null;
  itemId: number = 0;
  itemName: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.http.get<any[]>('/api/items').subscribe(items => {
      this.items = items;
      this.selectedItem = null;
    });
  }

  getItemById() {
    this.http.get<any>(`/api/items/${this.itemId}`).subscribe(item => {
      this.selectedItem = item;
      this.items = [];
    });
  }

  createNewItem() {
    const newItem = { name: this.itemName };
    this.http.post<any>('/api/items', newItem).subscribe(item => {
      this.items.push(item);
    });
  }

  updateItem() {
    const updatedItem = { name: this.itemName };
    this.http.put<any>(`/api/items/${this.itemId}`, updatedItem).subscribe(item => {
      const index = this.items.findIndex(i => i.id === item.id);
      this.items[index] = item;
    });
  }

  deleteItem() {
    this.http.delete<any>(`/api/items/${this.itemId}`).subscribe(() => {
      this.items = this.items.filter(item => item.id !== this.itemId);
    });
  }
}
