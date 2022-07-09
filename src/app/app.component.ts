import { Component } from '@angular/core';
import mockData from 'src/data';
import { TPro } from './models/typeProducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  productsList: TPro[] = mockData
    
  handleAdd(product: any) {
    console.log(product);
    this.productsList.push(product);
  }
}
