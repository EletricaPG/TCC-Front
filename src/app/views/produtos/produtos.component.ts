import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Model/Product';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { environment } from 'src/environments/environment';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any;
  produto!:Product;
  filterCategory:any;
  searchKey: string="";
  public searchTerm : string='';
  public searchT = new BehaviorSubject<string>("");
  public carrinhoCompra!: CarrinhoComponent;

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.carrinhoCompra = new CarrinhoComponent();
    this.http.get(`${environment.apibaseURL}api/Product`)
   .subscribe(produtos=>{
    this.produtos = produtos;
    this.filterCategory=produtos;
    console.log(produtos);

    
    this.produtos.forEach((a:any) => {
      if(a.categoryId==="Compressores"){
        a.categoryId==="Compressores"
      }
      Object.assign(a,{quantity:1,total:a.price})
    });
    console.log(produtos);
  })

  this.searchT.subscribe((val : any)=>{
    this.searchKey = val;
  })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.searchT.next(this.searchTerm);
  }

  // addCart(produto : any){
  //  this.carrinhoService.addCart(produto);
  // }

  filter(category:string){
   this.filterCategory = this.produtos
   .filter((a:any)=>{
      if(a.categoryId == category || category==''){
        return a;
      }
   })
  }

  public abrirProduto(produto: Product) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['/detalhe']);
  }
  
  comprar(produto:Product){
    // console.log('this.produto')
    // console.log(produto)
    // localStorage.setItem('produtoLocalStoge',JSON.stringify(produto));
    this.carrinhoCompra.adicionar(produto);
    
   
  }

  


}
