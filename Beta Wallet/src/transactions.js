const TRANSACTIONS_STORAGE_KEY = 'walletTransactions';

export function getTransactions() {
  const storedTransactions = window.localStorage.getItem(TRANSACTIONS_STORAGE_KEY);

  if (storedTransactions === null) {
    return [];
  }

  const transactions = JSON.parse(storedTransactions);
  if (!Array.isArray(transactions)) {
    throw new Error('Saved transaction data is not valid.');
  }

  return transactions;
}

function recordTransaction(type, amount, method, paymentDetail) {
  const transactions = getTransactions();
  const transaction = {
    id: Date.now(),
    type,
    amount,
    method,
    ...(paymentDetail ? { paymentDetail } : {}),
    date: new Date().toISOString(),
  };

  window.localStorage.setItem(
    TRANSACTIONS_STORAGE_KEY,
    JSON.stringify([...transactions, transaction]),
  );

  return transaction;
}

export function recordDeposit(amount, method, paymentDetail) {
  return recordTransaction('deposit', amount, method, paymentDetail);
}

export function recordWithdrawal(amount, method, paymentDetail) {
  const transactions = getTransactions();
  const balance = transactions.reduce(
    (total, transaction) => total + (transaction.type === 'deposit' ? transaction.amount : -transaction.amount),
    0,
  );

  if (amount > balance) {
    const error = new Error('Insufficient balance for this withdrawal.');
    error.name = 'InsufficientBalanceError';
    throw error;
  }

  return recordTransaction('withdrawal', amount, method, paymentDetail);
}
