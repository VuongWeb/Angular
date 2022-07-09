import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TPro } from 'src/app/models/typeProducts';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  productsDetail!: TPro
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(data => {
      this.productsDetail = data;
    })
  }

  ngOnInit(): void {
  }

}
