import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any;

  constructor(private http: HttpClient) {}

  addProduct(product: any) {
    return this.http
      .post<any>('http://localhost:3000/products/add', product)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getProducts() {
    return this.http.get<any>('http://localhost:3000/products/get').pipe(
      map((data) => {
        if (data) {
          this.products = data;
          console.log(this.products);
        }
        return this.products;
      })
    );
  }
}

// {
//    "type": "cpu",
//     "id": "100001",
//     "name": "Intel Core i7 Gen 10th",
//     "detail": "The Intel Core i7-10750H is a high-end processor for laptops",
//     "quantity": 10,
//     "price": 10,
//     "file": "testfile",
//     "img": "testImg"
// }
