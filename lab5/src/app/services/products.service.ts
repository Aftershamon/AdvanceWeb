import { Injectable } from '@angular/core';
import { productsType } from '../products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product_list: productsType = [
    { p_id: 100001, p_name: 'Intel Core i7', p_quantity: 10, p_price: 7000 },
    {p_id: 100002, p_name:'NVIDIA', p_quantity:5,p_price:5000 },
    {p_id: 100003, p_name:'Kingston', p_quantity:8,p_price:1300 },
    {p_id: 100004, p_name:'MSI', p_quantity:4,p_price:7790 },
    {p_id: 100005, p_name:'Xtreem', p_quantity:11,p_price:12900 },
    
  ]

  constructor() { }

  getAllProduct() {
    return this.product_list;
  }

  getSomeProduct(p_id: number) {
    return this.product_list[p_id]
  }
}
