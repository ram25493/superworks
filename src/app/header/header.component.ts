import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number=0;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getproduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
