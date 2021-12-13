import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products:any;

  constructor(private prod:ProductService , private cartservice:CartService) { }

  ngOnInit(): void {
  
    this.getProductList();
  }
  getProductList(){
    this.prod.getProduct().subscribe(res=>{
      this.products = res.products;
    })
  }

  addToCart(item : any){
    this.cartservice.addToCart(item);
  }

}
