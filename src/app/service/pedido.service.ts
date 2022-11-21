import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../Model/Order';

@Injectable()
export class PedidoService {

constructor(private http: HttpClient) { }

get headers() : HttpHeaders{
    return new HttpHeaders().set('content-type', 'application/json');
}

public efetivarCompra(pedido : Order): Observable<string>{
    return this.http.post<string>(`${environment.apibaseURL}api/Order`, JSON.stringify(pedido), {headers: this.headers})
}

}
