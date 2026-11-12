import { Component, inject, signal } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  private productService = inject(ProductService);
  products = signal<ProductModel[]>([]);

  ngOnInit(){
    this.loaduser()
  }
  loaduser(){
    this.productService.getAll().subscribe({
      next: (data) =>{
        this.products.set(data)
      }
    })
  }
}
