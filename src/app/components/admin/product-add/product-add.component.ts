import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TPro } from 'src/app/models/typeProducts';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: TPro = {
    name: "",
    price: 0,
    status: true
  }
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productsService.getProduct(id).subscribe(data => {
        this.product = data
      })
    }
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productsService.updateProduct(this.product).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/products');
        }, 2000)
      })
    }

    this.productsService.addProduct(this.product).subscribe(data => {
      setTimeout(() => {
        this.router.navigateByUrl('/products')
      }, 2000)
    })
    console.log(this.product);
  }
}
