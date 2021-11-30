import { HasFormatter } from "../interfaces/HasFormatter.js";

// class
export class Payment implements HasFormatter {
  // use access modifier to simplify the code:

  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $ ${this.amount} for ${this.details}`;
  }
}
