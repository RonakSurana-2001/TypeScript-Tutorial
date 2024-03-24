var Invoice = /** @class */ (function () {
    // client:string;
    // details:string;
    // private amount:number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u20B9").concat(this.amount, " for ").concat(this.details);
    };
    Invoice.prototype.setter = function (amount) {
        this.amount = amount;
    };
    return Invoice;
}());
export { Invoice };
