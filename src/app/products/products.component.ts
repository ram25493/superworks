import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products:any;
  itemExists: number[] = [];

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
    if (item.id && !this.itemExists.includes(this.products.id)) {
      this.itemExists.push(item.id);
  }
  }

}
