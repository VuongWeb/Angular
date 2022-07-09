import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { TPro } from "../models/typeProducts";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL: string = 'http://localhost:8000/products';

  constructor(private http: HttpClient) { }

  getProduct(id: any): Observable<TPro> {
    return this.http.get<TPro>(`${this.API_URL}/${id}`)
  }
  getProducts(): Observable<TPro[]> {
    return this.http.get<TPro[]>(`${this.API_URL}`)
  }
  removeProduct(id: number): Observable<TPro> {
    return this.http.delete<TPro>(`${this.API_URL}/${id}`)
  }
  addProduct(product: any): Observable<TPro> {
    return this.http.post<TPro>(`${this.API_URL}`, product)
  }
  updateProduct(product: TPro) {
    return this.http.put<TPro>(`${this.API_URL}/${product.id}`, product);
  }
}