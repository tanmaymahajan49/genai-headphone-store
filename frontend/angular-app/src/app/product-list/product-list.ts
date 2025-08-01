import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('/api/products').subscribe(data => {
      this.products = data;
    });
  }
}
