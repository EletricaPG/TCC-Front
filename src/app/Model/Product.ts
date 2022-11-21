import { DecimalPipe } from "@angular/common";

export class Product{
    id:string='';
    name!:string;
    description:string='';
    price!:DecimalPipe;
    categoryId!:DecimalPipe;
    amount!:Number;
    idSupplier:string='';
    urlArquivo: string='' ;
}