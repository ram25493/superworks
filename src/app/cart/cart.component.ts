import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product : any =[];

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {

    this.cartservice.getproduct().subscribe(res =>{
      this.product = res;
    })
  }

  removeItem(item : any){
    this.cartservice.removeCartItem(item);
  }

  emptyCart(){
    this.cartservice.removAll();
  }

}
