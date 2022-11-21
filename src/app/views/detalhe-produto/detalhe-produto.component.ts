import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/Client';
import { Product } from 'src/app/Model/Product';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

   produto!: Product;
   public carrinhoCompra!: CarrinhoComponent;
   botaoCompra!:boolean;
   client!: Client;

  constructor() { }

  ngOnInit(): void {
    this.carrinhoCompra = new CarrinhoComponent();
    var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
        if (produtoDetalhe) {
            this.produto = JSON.parse(produtoDetalhe);
        }
  }

  comprar(produto:Product){
    this.carrinhoCompra.adicionar(produto);
    // var Cliente = localStorage.getItem("idClient");
    // if(Cliente){
    //    this.botaoCompra=true;
    //    this.carrinhoCompra.adicionar(produto);
       
    // }else{
    //   this.botaoCompra=false;
    // }
    
  }

}
