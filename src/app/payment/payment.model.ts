export class PaymentModel{
    id: number =0;
    cardno: string = '';
    nameoncard: string = '';
    amount: number=0;
    cvv!: number;
    pmtdate!:Date;
    paymentmethod:string='';
    exmonth:number=0;
    exyear:number=0;
    
}