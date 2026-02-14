import {Product} from '../../models/product.model';
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  whatsapp!: string;
  telegram!: string;
  ngOnInit() {
    let kaspi_link = encodeURIComponent(this.product.link);
    let product_name = encodeURIComponent(this.product.name);
    this.whatsapp = `https://wa.me/?text=Check out this product: ${kaspi_link}`;
    this.telegram = `https://t.me/share/url?url=${kaspi_link}&text=${product_name}`;
  }
}
