import { Component } from '@angular/core';


import { IProduct } from './products';
import { ProductsDataService } from './products-data.service';



@Component({
    selector: 'products',
    moduleId: module.id,
    templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit {
    products: IProduct[];
    pagetitle: string = "Products";

    constructor(private productDataService: ProductsDataService) {

    }

    ngOnInit() {
        this.products = this.productDataService.getProductData();
    }
}