var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " owes \u20B9").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
export { Payment };
