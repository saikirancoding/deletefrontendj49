export class Customer
{
    id:number;
    name:string;
    payment:number;

    constructor(id:number=0, name:string="", payment:number=0)
    {
        this.id=id;
        this.name=name;
        this.payment=payment;
    }
}