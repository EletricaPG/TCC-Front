import { DecimalPipe } from "@angular/common";
import { OrderDetails } from "./OrderDetails";

export class Order{
    id : string = '';
    valueTotal !: DecimalPipe;
    date!: Date;
    idPayment: string = '';
    idClient : string = '';
    orders !: OrderDetails[];


    constructor(){
        this.date = new Date();
        this.orders = [];
    }
}