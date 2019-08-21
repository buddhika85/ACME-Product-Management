import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate 
{

  constructor(private router : Router)
  {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {

    let productId = Number.parseInt(next.url[1].path);
    if (isNaN(productId) || productId < 1)
    {
      //debugger
      alert("Invalid Product ID - Navigating back to product list");
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
