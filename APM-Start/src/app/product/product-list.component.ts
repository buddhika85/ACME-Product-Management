import { Component, OnInit } from "@angular/core";
import { Product, IProduct } from "./Product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit
{
  
    pageTitle : string = 'Product List';
    productsList : IProduct [];
    filteredProductList : IProduct [];
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    showHideText : string = 'Show Image';
    _filteredBy : string = '';
    errorMessage : string = '';

    constructor(private productService :  ProductService) 
    {      
    }

    get filteredBy() : string 
    {
      return this._filteredBy;
    }

    set filteredBy(value : string)
    {
      this._filteredBy = value;
      this.filteredProductList = this.getFilteredProducts();
    }
  

    getFilteredProducts() : IProduct []
    {      
        let cloned : IProduct [] =  this.productsList.map(x => Object.assign({}, x));        
        let filteredProductList : IProduct [] = this.productService.getFilteredProducts(this.filteredBy, cloned);
        return filteredProductList;
    }

    toggleImages() : void 
    {
        this.showImage = !this.showImage;
        if (this.showImage)
        {
            this.showHideText = 'Hide Image';
        }
        else
        {
            this.showHideText = 'Show Image';
        }
    }

    listenToRatingClickedEvent(message : string) : void
    {
        this.pageTitle = `Product list : ${message}`; 
    }

    ngOnInit(): void 
    {     
      this.productService.getProductsHttp().subscribe(
        
        result => {
          this.productsList = result;
          this.filteredProductList = result;
        },
        error => this.errorMessage = <any>error
      );         
      
    }
}