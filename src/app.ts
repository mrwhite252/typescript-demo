// class
class Invoice {
  // use access modifier to simplify the code:

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $ ${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("David", "copyright work", 250);
const invoiceTwo = new Invoice("Steven", "design work", 300);

console.log(invoiceOne, invoiceTwo);

let invoices: Invoice[] = [];

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
