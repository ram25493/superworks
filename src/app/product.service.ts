import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("../assets/data/products.json").pipe(map((res:any)=>{
      return res;
    }));
  }
}
