import { Product, IProduct } from "./Product";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
// import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({
    providedIn: 'root'  //available to all components in the application
})

export class ProductService
{

    private productUrl = 'http://localhost:51681/api/Product/SearchProducts'; //'api/products/products.json';

    constructor(private http : HttpClient) 
    {
    }    

    searchProducts(str : string): Observable<IProduct[]> 
    {
        let searchQueryString = this.productUrl;

        const params = new HttpParams().set('searchString', str);

        //debugger
        return this.http.get<IProduct[]>(searchQueryString, {params}).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
    
    // search
    // getFilteredProducts(filteredBy : string, list : IProduct[]) : IProduct[] 
    // {       
    //     if (list && filteredBy && filteredBy !== '')
    //     {                 
    //         let resultList : IProduct [] = [];
    //         let lowereCaseFilter : string = filteredBy.toLowerCase();
    //         list.forEach(element => {
    //             if (element.productName.toLocaleLowerCase().includes(lowereCaseFilter) || element.description.toLocaleLowerCase().includes(lowereCaseFilter) || 
    //               element.productCode.toLocaleLowerCase().includes(lowereCaseFilter))
    //             {
    //               resultList.push(element);
    //             }
    //         });

    //         return resultList;         
    //     }
    //     else
    //     {
    //         return list;
    //     }
    // }
}