// Import the classes from the money-card.ts file
import { CurrencyEnum, Transaction, Card } from './models/money-card';

// Create a new card
const myCard = new Card();

// Add a transaction to the card
const transaction = new Transaction(100, CurrencyEnum.USD);
const transaction1Id = myCard.addTransaction(transaction);


// Get a transaction by its Id
const transaction1 = myCard.getTransaction(transaction1Id);
console.log('Transaction 1:', transaction1);

// Get the total balance in USD
const balanceInUSD = myCard.getBalance(CurrencyEnum.USD);
console.log('Balance in USD:', balanceInUSD);

// Use the 'Transaction' class
const newTransaction = new Transaction(200, CurrencyEnum.USD);
console.log('New Transaction:', newTransaction);
