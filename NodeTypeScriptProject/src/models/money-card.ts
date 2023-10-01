import { v4 as uuidv4 } from 'uuid';

enum CurrencyEnum {
  USD = 'USD',
  UAH = 'UAH',
}

class Transaction {
  public readonly Id: string;
  constructor(public Amount: number, public Currency: CurrencyEnum) {
    this.Id = uuidv4();
  }
}

class Card {
  private transactions: Transaction[] = [];

  public addTransaction(transaction: Transaction): string {
    this.transactions.push(transaction);
    return transaction.Id;
  }

  public addTransactionWithCurrency(currency: CurrencyEnum, amount: number): string {
    const transaction = new Transaction(amount, currency);
    this.transactions.push(transaction);
    return transaction.Id;
  }

  public getTransaction(id: string): Transaction | undefined {
    return this.transactions.find((transaction) => transaction.Id === id);
  }

  public getBalance(currency: CurrencyEnum): number {
    return this.transactions.reduce((total, transaction) => {
      if (transaction.Currency === currency) {
        total += transaction.Amount;
      }
      return total;
    }, 0);
  }
}

export { CurrencyEnum, Transaction, Card };
