export class Invoice{
    // client:string;
    // details:string;
    // private amount:number;

    constructor(
        readonly client:string,
        public details:string,
        private amount:number,
    ){}

    format(){
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }

    setter(amount:number){
        this.amount=amount
    }
}
