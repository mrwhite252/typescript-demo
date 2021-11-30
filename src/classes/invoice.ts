import { HasFormatter } from "../interfaces/HasFormatter.js";

// class
export class Invoice implements HasFormatter {
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
