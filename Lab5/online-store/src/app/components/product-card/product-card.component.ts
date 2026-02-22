import {Product} from '../../models/product.model';
import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() delete = new EventEmitter<number>();

  whatsapp!: string;
  telegram!: string;
  liked!: boolean;

  allImages: string[] = [];
  currentImage: string = '';
  ngOnInit() {
    let kaspi_link = encodeURIComponent(this.product.link);
    let product_name = encodeURIComponent(this.product.name);
    this.whatsapp = `https://wa.me/?text=Check out this product: ${kaspi_link}`;
    this.telegram = `https://t.me/share/url?url=${kaspi_link}&text=${product_name}`;
    this.allImages = [this.product.image, ...this.product.images];
    this.currentImage = this.product.image;
  }
  selectImage(image: string) {
    this.currentImage = image;
  }

  next() {
    let idx = this.allImages.indexOf(this.currentImage) + 1;
    if (idx >= this.allImages.length) idx = 0;
    this.currentImage = this.allImages[idx];
  }
  prev() {
    let idx = this.allImages.indexOf(this.currentImage) - 1;
    if (idx < 0) idx = this.allImages.length - 1;
    this.currentImage = this.allImages[idx];
  }

  like() {
    if (this.liked) {
      this.product.likes--;
      this.liked = false;
    }
    else {
      this.product.likes++;
      this.liked = true;
    }
  }

  remove() {
    let confirmation = confirm('Вы уверены? Это действие невозможно отменить');
    if (confirmation) {
      this.delete.emit(this.product.id);
    }
  }
}
