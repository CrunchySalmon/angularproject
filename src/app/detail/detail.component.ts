import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'app/index/products/products';
import { ProductsDataService } from 'app/index/products/products-data.service';

@Component({
    selector: 'detail',
    moduleId: module.id,
    templateUrl: 'detail.component.html'
})

export class DetailComponent {
    productid: number;
    product: IProduct;


    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _ProductDataService: ProductsDataService) {
    }

    ngOnInit() {
        this.productid = +this._route.snapshot.params['id'];
        this.product = this._ProductDataService.getProductDataById(this.productid);
    }
}