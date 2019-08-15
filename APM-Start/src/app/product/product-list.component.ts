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
      this.searchProducts();
    }
  

    searchProducts() : any
    {     
          this.productService.searchProducts(this.filteredBy).subscribe(
          
          result => {        
            //debugger    
            this.filteredProductList = result;             
          },
          error => this.errorMessage = <any>error
        );
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
      // this.productService.searchProducts(this.filteredBy).subscribe(
        
      //   result => {
      //     this.productsList = result;
      //     this.filteredProductList = result;
      //   },
      //   error => this.errorMessage = <any>error
      // );         
      this.searchProducts();
    }
}