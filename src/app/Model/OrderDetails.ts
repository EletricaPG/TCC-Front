import { DecimalPipe } from "@angular/common";

export class OrderDetails{
    id: string ='';
    idProduct: string ='';
    amountOrder!: number;
    valueUni!: DecimalPipe;
    subTotal!: DecimalPipe;

}