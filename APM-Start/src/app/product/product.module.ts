import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,   
    ConvertToSpacesPipe
  ],
  imports: [   
    RouterModule.forChild([
      {path : 'products', component: ProductListComponent},
      { 
        path : 'product/:id', 
        canActivate: [ ProductDetailGuard ],    // avoid navigation on invalid product ID
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
