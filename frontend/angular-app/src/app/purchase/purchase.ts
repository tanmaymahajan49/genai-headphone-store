import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './purchase.html',
  styleUrl: './purchase.css'
})
export class Purchase {
  purchaseForm: FormGroup;
  products: any[] = [];
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.purchaseForm = this.fb.group({
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      paymentMethod: ['', Validators.required]
    });
    this.http.get<any[]>('/api/products').subscribe(data => {
      this.products = data;
    });
  }

  onSubmit() {
    if (this.purchaseForm.valid) {
      // For demo, userId is hardcoded. In real app, get from auth.
      const payload = {
        userId: 1,
        productId: this.purchaseForm.value.productId,
        quantity: this.purchaseForm.value.quantity,
        name: this.purchaseForm.value.name,
        address: this.purchaseForm.value.address,
        paymentMethod: this.purchaseForm.value.paymentMethod
      };
      this.http.post('/api/purchase', payload).subscribe({
        next: () => this.message = 'Purchase successful',
        error: err => this.message = err.error || 'Purchase failed'
      });
    }
  }
}
