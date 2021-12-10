import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product : any =[];
  price = 0;
  tot: any;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {

    this.getCart();
    
  }

  getCart(): void{
    this.cartservice.getproduct().subscribe(res =>{
      this.product = res;
      this.tot =this.product.map((item : any) => item.price).reduce((prev:any, next:any) => prev + next);

    })  
  }

  removeItem(item : any){
    this.cartservice.removeCartItem(item);
    this.getCart();
  }

}
