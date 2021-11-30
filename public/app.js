"use strict";
// class
class Invoice {
    // use access modifier to simplify the code:
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("David", "copyright work", 250);
const invoiceTwo = new Invoice("Steven", "design work", 300);
console.log(invoiceOne, invoiceTwo);
let invoices = [];
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
