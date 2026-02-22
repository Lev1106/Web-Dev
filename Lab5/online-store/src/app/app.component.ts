import {Component, inject} from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductService} from './services/product.service';
import {Category} from './models/category.model';
import {Product} from './models/product.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productService = inject(ProductService);
  categories: Category[] = this.productService.categories;
  products: Product[] = [];
  categoryId: number | null = null;
  selected!: boolean;


  selectCategory(id: number) {
    this.categoryId = id;
    this.selected = true;
    this.products = this.productService.products.filter(p => p.categoryId === id);
  }

  onDeleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
