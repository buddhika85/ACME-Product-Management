import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path : 'products', component: ProductListComponent},
      { 
        path : 'product/:id', 
        canActivate: [ ProductDetailGuard ],    // avoid navigation on invalid product ID
        component: ProductDetailComponent
      }
    ])
  ]
})
export class ProductModule { }
