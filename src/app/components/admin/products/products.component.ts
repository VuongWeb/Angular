import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { TPro } from '../../../models/typeProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList!: TPro[];
  constructor(private productService: ProductsService) {
    this.showProducts();
  }

  ngOnInit(): void {
  }

  showProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.productsList = data
    })
  }

  handleRemove = (id: any) => {
    const confirm = window.confirm('Bạn có chắc chắc xóa không !');
    if (confirm) {
      this.productService.removeProduct(id).subscribe(() => {
        this.productsList = this.productsList.filter(item => item.id !== id);
      })
    }
  }



}
