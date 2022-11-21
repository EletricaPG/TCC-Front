import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/service/carrinho.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public totalItem : number=0;

  constructor( private carrinhoService : CarrinhoService ) { }

  ngOnInit(): void {
   this.carrinhoService.getProdutos().
   subscribe(res=>{
    this.totalItem = res.length;
   })
  }

}
