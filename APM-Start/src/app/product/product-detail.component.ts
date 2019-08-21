import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle :  string = "Product Detail";
  productId : number;
  product : IProduct;
  errorMessage : string = '';

  constructor(private route: ActivatedRoute, private productService : ProductService, private router : Router) 
  {
    

  }

  ngOnInit()
  {
    this.productId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    //console.log('selected product Id ' + this.productId);

    this.productService.getProductById(this.productId).subscribe(
          
      result => {        
        //debugger    
          this.product = result;     
          this.pageTitle += ` - ${this.productId} - ${this.product.productName}`;          
        },
        error => this.errorMessage = <any>error
      );
  }

  onBackBtnClick() : void 
  {
    this.router.navigate(['/products']);
  }
}
