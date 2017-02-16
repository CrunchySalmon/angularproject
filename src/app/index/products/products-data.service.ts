
import { Injectable } from '@angular/core';
import { PRODUCTDATA } from './products-data';
import { IProduct } from './products';

@Injectable()

export class ProductsDataService {
  getProductData() : IProduct[] {
    return PRODUCTDATA;
  }

  getProductDataById(productid: number) {
    return PRODUCTDATA.find(r => r.id == productid)
  }
}