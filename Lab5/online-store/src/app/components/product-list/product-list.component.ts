import {Product} from '../../models/product.model';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteProduct.emit(id);
  }
}
