import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewsComponent } from './views/views.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { QuemsomosComponent } from './views/quemsomos/quemsomos.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { FilterPipe } from './share/filter.pipe';
import { MenuComponent } from './views/menu/menu.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { CommonModule } from '@angular/common';
import { CompraFinalizadaComponent } from './views/compra-finalizada/compra-finalizada.component';
import { DetalheProdutoComponent } from './views/detalhe-produto/detalhe-produto.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    HomeComponent,
    QuemsomosComponent,
    LoginComponent,
    ProdutosComponent,
    CadastroComponent,
    FilterPipe,
    MenuComponent,
    CarrinhoComponent,
    CompraFinalizadaComponent,
    DetalheProdutoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
