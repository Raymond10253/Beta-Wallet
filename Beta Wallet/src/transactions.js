import { getUserStorageKey } from './userStorage.js';

const TRANSACTIONS_STORAGE_KEY = 'walletTransactions';

export function getTransactions(userName) {
  const storageKey = getUserStorageKey(TRANSACTIONS_STORAGE_KEY, userName);
  const storedTransactions = window.localStorage.getItem(storageKey);

  if (storedTransactions === null) {
    return [];
  }

  const transactions = JSON.parse(storedTransactions);
  if (!Array.isArray(transactions)) {
    throw new Error('Saved transaction data is not valid.');
  }

  return transactions;
}

function recordTransaction(type, amount, method, paymentDetail, userName) {
  const transactions = getTransactions(userName);
  const transaction = {
    id: Date.now(),
    type,
    amount,
    method,
    ...(paymentDetail ? { paymentDetail } : {}),
    date: new Date().toISOString(),
  };

  window.localStorage.setItem(
    getUserStorageKey(TRANSACTIONS_STORAGE_KEY, userName),
    JSON.stringify([...transactions, transaction]),
  );

  return transaction;
}

export function recordDeposit(amount, method, paymentDetail, userName) {
  return recordTransaction('deposit', amount, method, paymentDetail, userName);
}

export function recordWithdrawal(amount, method, userName) {
  const transactions = getTransactions(userName);
  const balance = transactions.reduce(
    (total, transaction) => total + (transaction.type === 'deposit' ? transaction.amount : -transaction.amount),
    0,
  );

  if (amount > balance) {
    const error = new Error('Insufficient balance for this withdrawal.');
    error.name = 'InsufficientBalanceError';
    throw error;
  }

  return recordTransaction('withdrawal', amount, method, undefined, userName);
}
