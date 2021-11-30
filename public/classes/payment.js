// class
export class Payment {
    // use access modifier to simplify the code:
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $ ${this.amount} for ${this.details}`;
    }
}
