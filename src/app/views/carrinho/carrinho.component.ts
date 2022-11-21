import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/Model/Product';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { environment } from 'src/environments/environment';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Order } from 'src/app/Model/Order';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  // public produtos : any =[];
  public totalGeral !: number;
  // produto: any;
  public produtos: Product[] = [];
  public order!: Order;
  
  
 
 

  constructor( ) { }

  ngOnInit(): void {
   
   
     this.ObterProduto();
    

   }
  
  adicionar(produto:Product){
    var produtoLocalStoge = localStorage.getItem("produtoLocalStoge");
    if (!produtoLocalStoge) {
        // se nao existir 
          this.produtos.push(produto);            
    } else {
        // se ja existir 
         this.produtos = JSON.parse(produtoLocalStoge);
         this.produtos.push(produto);
                    
    }

    localStorage.setItem("produtoLocalStoge", JSON.stringify(this.produtos));
    
   

  }

  ObterProduto() : Product[]   {
    this.totalGeral=0;
    var total: any=0;
    var produtoLocalStoge = localStorage.getItem("produtoLocalStoge");
    if(produtoLocalStoge){
      this.produtos = JSON.parse(produtoLocalStoge);
      this.produtos.forEach(function(a){
        total +=a.price;
    })
    }
         
       this.totalGeral=total

      return this.produtos;
   
      
      //  this.produtos=
  
   
  }

  remover(produto:Product){
   
    var produtoLocalStoge = localStorage.getItem("produtoLocalStoge");
    if(produtoLocalStoge){
       this.produtos = JSON.parse(produtoLocalStoge);
       this.produtos = this.produtos.filter(p => p.id != produto.id);
       localStorage.setItem("produtoLocalStoge", JSON.stringify(this.produtos));
     
    }
  }

  
  
// efetivaCompra(){
// //  this.pedidoService.efetivarCompra(this.criarPedido())
// }





//  criarPedido():  Order   {

//   let pedido = new Order();
//   pedido.idClient = localStorage.setItem("idClient",this.order.id);
  

//   this.produtos = this.ObterProduto();

  // for (let produto of this.produtos) {
  //     let itemPedido = new ItemPedido();
  //     itemPedido.produtoId = produto.id;
      
  //     if (!produto.quantidade)
  //         produto.quantidade = 1;
  //     itemPedido.quantidade = produto.quantidade;

  //     pedido.itensPedido.push(itemPedido);

  // }

//   return pedido;
  
// }





  

}
