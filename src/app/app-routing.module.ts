import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { LoginComponent } from './views/login/login.component';
import { QuemsomosComponent } from './views/quemsomos/quemsomos.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompraFinalizadaComponent } from './views/compra-finalizada/compra-finalizada.component';
import { DetalheProdutoComponent } from './views/detalhe-produto/detalhe-produto.component';


const routes: Routes =
[ {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'quemsomos',component:QuemsomosComponent},
  {path: 'login',component:LoginComponent},
  {path: 'produtos',component:ProdutosComponent},
  {path: 'cadastro',component:CadastroComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'carrinho',component:CarrinhoComponent},
  {path: 'finalizada',component:CompraFinalizadaComponent},
  {path: 'detalhe',component:DetalheProdutoComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
